package com.kh.bird.list.member.model.service;

import java.util.Map;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kh.bird.list.exception.MemberIdDuplicateException;
import com.kh.bird.list.member.model.dao.MemberMapper;
import com.kh.bird.list.member.model.dto.MemberDTO;
import com.kh.bird.list.member.model.vo.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService {

		private final MemberMapper mapper;
		private final PasswordEncoder passwordEncoder;
		public void signUp(MemberDTO member) {

			MemberDTO searchedMember = mapper.getMemberByMemberId(member.getMemberId());

			
			if(searchedMember != null) {
				throw new MemberIdDuplicateException("이미 존재하는 아이디입니다.");	// 아이디가 있으면 예외발생 시킴
			}

			
			Member memberValue = Member.builder()
									   .memberId(member.getMemberId())
									   .memberPw(passwordEncoder.encode(member.getMemberPw()))
									   .memberName(member.getMemberName())
									   /*.role("ROLE_내맘대로 적기")*/
									   .role("ROLE_USER")
									   .build();
			
			mapper.signUp(memberValue);
			
			log.info("사용자 등록 성공 : {}", member );
			
		}
		@Override
		public Map<String, String> generateToken(String username) {
			return null;
		}
		

}
