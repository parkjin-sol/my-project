package com.kh.bird.list.board.model.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.kh.bird.list.board.model.dto.BoardDTO;

public interface BoardService {
	
	void save(BoardDTO board, MultipartFile file);
	
	BoardDTO findById(Long boardNo);
	
	BoardDTO update(BoardDTO board, MultipartFile file);
	
	void deleteById(Long boardNo);

	List<BoardDTO> findAll(int pageNo);
}
