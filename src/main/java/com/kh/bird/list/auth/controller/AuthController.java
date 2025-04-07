package com.kh.bird.list.auth.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kh.bird.list.auth.model.service.AuthService;
import com.kh.bird.list.member.model.dto.MemberDTO;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody MemberDTO member) {
        log.info("로그인 시도: {}", member.getMemberId());

        Map<String, String> tokenMap = authService.login(member);
        
        log.info("토큰 발급 완료: {}", tokenMap);

        return ResponseEntity.ok(tokenMap); // => { accessToken, refreshToken }
    }
}
