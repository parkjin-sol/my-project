package com.kh.bird.list.token.model.service;

import java.util.Map;

public interface TokenService {
	
	  Map<String, String> generateToken(String username);
	    Map<String, String> refreshToken(String refreshToken);
}