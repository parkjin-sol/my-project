package com.kh.bird.list.member.model.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.kh.bird.list.member.model.dto.MemberDTO;
import com.kh.bird.list.member.model.vo.Member;

@Mapper
public interface MemberMapper {
	@Insert("INSERT INTO MEG_MEMBER (MEMBER_ID, MEMBER_PW, MEMBER_NAME, ROLE) VALUES (#{memberId}, #{memberPw}, #{memberName}, #{role})")
	int signUp(Member member);

	@Select("SELECT MEMBER_ID memberId, MEMBER_PW memberPw, MEMBER_NAME memberName, ROLE, REG_DATE FROM MEG_MEMBER WHERE MEMBER_ID = #{memberId}")
	MemberDTO getMemberByMemberId(String memberId);

	@Update("UPDATE MEG_MEMBER SET MEMBER_PW = #{encodedPassword} WHERE MEMBER_ID = #{memberId}")
	void changePassword(Map<String, Object> changeRequest);

	@Delete("DELETE FROM MEG_MEMBER WHERE MEMBER_ID = #{memberId}")
	void deleteByPassword(String memberId);

}
