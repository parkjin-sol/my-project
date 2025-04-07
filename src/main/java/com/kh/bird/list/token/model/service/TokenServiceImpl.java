package com.kh.bird.list.token.model.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.kh.bird.list.auth.util.JwtUtil;
import com.kh.bird.list.token.model.dao.TokenMapper;
import com.kh.bird.list.token.model.vo.RefreshToken;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class TokenServiceImpl implements TokenService {

    private final JwtUtil tokenUtil;

    @Override
    public Map<String, String> generateToken(String username) {
        String accessToken = tokenUtil.getAccessToken(username);
        String refreshToken = tokenUtil.getRefreshToken(username);

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);

        return tokens;
    }

    @Override
    public Map<String, String> refreshToken(String refreshToken) {
        Claims claims = tokenUtil.parseJwt(refreshToken);
        String username = claims.getSubject();

        return generateToken(username);
    }
}