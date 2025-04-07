package com.kh.bird.list.auth.model.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kh.bird.list.auth.util.JwtUtil;
import com.kh.bird.list.exception.GlobalExceptionHandler;
import com.kh.bird.list.exception.LoginFailedException;
import com.kh.bird.list.member.model.dao.MemberMapper;
import com.kh.bird.list.member.model.dto.MemberDTO;
import com.kh.bird.list.token.model.service.TokenService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final GlobalExceptionHandler globalExceptionHandler;
	
	private final MemberMapper mapper;
	private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final TokenService tokenService;

    @Override
    public Map<String, String> login(MemberDTO member) {
        MemberDTO dbMember = mapper.getMemberByMemberId(member.getMemberId());

        if (dbMember == null || !passwordEncoder.matches(member.getMemberPw(), dbMember.getMemberPw())) {
            throw new LoginFailedException("아이디 또는 비밀번호가 일치하지 않습니다.");
        }

        Map<String, String> tokens = tokenService.generateToken(dbMember.getMemberId());

        log.info("AccessToken : {}", tokens.get("accessToken"));
        log.info("RefreshToken : {}", tokens.get("refreshToken"));

        return tokens;
    }

}
