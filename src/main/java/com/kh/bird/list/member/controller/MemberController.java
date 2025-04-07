package com.kh.bird.list.member.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.bird.list.member.model.dao.MemberMapper;
import com.kh.bird.list.member.model.dto.MemberDTO;
import com.kh.bird.list.member.model.service.MemberService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("members")
@RequiredArgsConstructor
public class MemberController {
	private final MemberService memberService;
	private final MemberMapper mapper;
	
	@PostMapping
	public ResponseEntity<?> signUp(@RequestBody @Valid MemberDTO member) {
		//log.info("내가 받음? {}", member);
		memberService.signUp(member);
		return ResponseEntity.status(201).build();
	}
	
	@GetMapping("/me")
	public ResponseEntity<MemberDTO> getLoginUserInfo() {
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

	    if (authentication == null || !authentication.isAuthenticated()) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	    }

	    String memberId = authentication.getName(); // 토큰에서 꺼낸 사용자 ID

	    MemberDTO dbMember = mapper.getMemberByMemberId(memberId); // DB에서 사용자 정보 가져옴
	    if (dbMember == null) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    }

	    return ResponseEntity.ok(dbMember);
	}
	
}
