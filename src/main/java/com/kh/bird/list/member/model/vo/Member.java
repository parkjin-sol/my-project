package com.kh.bird.list.member.model.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.Value;

@Value
@Getter
@Builder
public class Member {
	private String memberId;
	private String memberPw;
	private String memberName;
	private String role;
}
