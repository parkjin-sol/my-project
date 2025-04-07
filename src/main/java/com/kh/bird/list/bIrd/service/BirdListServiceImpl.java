package com.kh.bird.list.bIrd.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BirdListServiceImpl implements BirdListService {
	
	private String requestApi(String uriPath) {
	    URI uri = null;
	    try {
	        uri = new URI(uriPath);
	    } catch (URISyntaxException e) {
	        e.printStackTrace();
	    }

	    HttpHeaders headers = new HttpHeaders();
	    headers.set("User-Agent", "Mozilla/5.0 (BirdsMag)");

	    HttpEntity<Void> entity = new HttpEntity<>(headers);

	    RestTemplate restTemplate = new RestTemplate();
	    ResponseEntity<String> response = restTemplate.exchange(
	        uri,
	        HttpMethod.GET,
	        entity,
	        String.class
	    );

	    return response.getBody();
	}

	    @Override
	    public String getBirdList() {
	        StringBuilder sb = new StringBuilder();
	        String encodedCategory = URLEncoder.encode("Category:한국의_새", StandardCharsets.UTF_8); // 자동 인코딩

	        sb.append("https://ko.wikipedia.org/w/api.php");
	        sb.append("?action=query");
	        sb.append("&list=categorymembers");
	        sb.append("&cmtitle=" + encodedCategory);
	        sb.append("&cmlimit=50");
	        sb.append("&format=json");
	        sb.append("&origin=*");

	        return requestApi(sb.toString());
	    }
	
	

}
