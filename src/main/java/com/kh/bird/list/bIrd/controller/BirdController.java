package com.kh.bird.list.bIrd.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.bird.list.bIrd.dto.BirdDTO;
import com.kh.bird.list.bIrd.service.BirdDetailService;
import com.kh.bird.list.bIrd.service.BirdListService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/birds")
@RequiredArgsConstructor
@CrossOrigin(origins ="*")
@Slf4j
public class BirdController {

	private final BirdListService birdListService;
	private final BirdDetailService birdDetailService;
	
	@GetMapping
	public ResponseEntity<String> getBirdList() {
		String response = birdListService.getBirdList();
		return ResponseEntity.ok(response);
	}
	@GetMapping("/{title}")
	public BirdDTO getBirdDetail(@PathVariable("title") String title) {
	    return birdDetailService.getBirdDetail(title);
	}
}
