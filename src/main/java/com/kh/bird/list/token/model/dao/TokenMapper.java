package com.kh.bird.list.token.model.dao;

import org.apache.ibatis.annotations.Mapper;

import com.kh.bird.list.token.model.vo.RefreshToken;

@Mapper
public interface TokenMapper {
	
	void saveToken(RefreshToken token);
	
	RefreshToken findByToken(RefreshToken token);
	
	void deleteExpiredRefreshToken(Long now);
}