package com.kh.bird.list.bIrd.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kh.bird.list.bIrd.dto.BirdDTO;

@Service
public class BirdDetailServiceImpl implements BirdDetailService {
	
	private String requestApi(String uriPath) {
		URI uri = null; 
		try {
			uri = new URI(uriPath);
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		
		String apiResponseData = new RestTemplate().getForObject(uri, String.class);
		return apiResponseData;
	}
	
	private String resizeImageUrl(String originalUrl, int width) {
	    if (!originalUrl.contains("/commons/")) return originalUrl;

	    try {

	        String[] parts = originalUrl.split("/commons/");
	        String imagePath = parts[1]; 
	        String thumbnailUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/" +
	                imagePath + "/" + width + "px-" + imagePath.substring(imagePath.lastIndexOf("/") + 1);

	        return thumbnailUrl;
	    } catch (Exception e) {
	        return originalUrl; // 실패하면 원본 리턴
	    }
	}

	@Override
	public BirdDTO getBirdDetail(String title) {
		
		 if (title.contains("목록") || title.contains("분류") || title.contains("종류")) {
		        return null;
		    }

		
		 try {
		        String encodedTitle = URLEncoder.encode(title, StandardCharsets.UTF_8);
		        String url = "https://ko.wikipedia.org/api/rest_v1/page/summary/" + encodedTitle;
		        String response = requestApi(url);

		        ObjectMapper objectMapper = new ObjectMapper();
		        JsonNode json = objectMapper.readTree(response);

		        String birdTitle = json.get("title").asText();
		        String extract = json.get("extract").asText();

		        String imageUrl = "";
		        if (json.has("originalimage")) {
		            String original = json.get("originalimage").get("source").asText();
		            imageUrl = resizeImageUrl(original, 800);
		        } else if (json.has("thumbnail")) {
		            imageUrl = json.get("thumbnail").get("source").asText();
		        }

		        return new BirdDTO(birdTitle, extract, imageUrl);

		    } catch (Exception e) {
		        e.printStackTrace();
		        return null;
		    }
		
	}
	
}
