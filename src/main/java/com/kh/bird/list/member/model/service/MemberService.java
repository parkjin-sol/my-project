package com.kh.bird.list.member.model.service;

import java.util.Map;

import com.kh.bird.list.member.model.dto.MemberDTO;

public interface MemberService {
	void signUp(MemberDTO member);
	Map<String, String> generateToken(String username);
}
