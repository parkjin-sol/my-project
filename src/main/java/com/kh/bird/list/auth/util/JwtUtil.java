package com.kh.bird.list.auth.util;

import java.util.Base64;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtil {

		@Value("${jwt.secret}")
		private String secretKey;
		private SecretKey key;
		
		@PostConstruct
		public void init() {
			byte[] keyArr = Base64.getDecoder().decode(secretKey);
			this.key = Keys.hmacShaKeyFor(keyArr);
			
		}
	public String getAccessToken(String username) {
	    return Jwts.builder()
	               .subject(username)
	               .issuedAt(new Date())
	               .expiration(new Date(System.currentTimeMillis() + 1000L * 60 * 60 * 24)) // 예: 24시간
	               .signWith(key)
	               .compact();
	}
	public String getRefreshToken(String username) {
	    return Jwts.builder()
	               .subject(username)
	               .expiration(new Date(System.currentTimeMillis() + 1000L * 60 * 60 * 24 * 3)) // 예: 3일
	               .signWith(key)
	               .compact();
	}

	public Claims parseJwt(String token) {
		return Jwts.parser()
				   .verifyWith(key)
				   .build()
				   .parseSignedClaims(token)
				   .getPayload();
	}

	
}
