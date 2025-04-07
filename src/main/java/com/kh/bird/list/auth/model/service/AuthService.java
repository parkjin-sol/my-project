package com.kh.bird.list.auth.model.service;

import java.util.Map;

import com.kh.bird.list.member.model.dto.MemberDTO;

public interface AuthService {
	Map<String, String> login(MemberDTO member);
}
