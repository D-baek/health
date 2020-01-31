package com.health.web.pxy;
import java.util.ArrayList;
import java.util.HashMap;
import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.health.web.center.Center;
import com.health.web.user.UserMapper;


@Component("/crawler") @Lazy
public class CrawlingProxy {
	@Autowired Box<HashMap<String, String>> box;
	@Autowired Trunk<String> trunk;
	@Autowired Center center;
	@Autowired UserMapper userMapper;
	
	@Transactional
	public ArrayList<HashMap<String, String>> healthCenterCrawl(int page, int count, String name){
		final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
		String url = "https://map.naver.com/v5/api/search?caller=pcweb&query="+name+"&type=all&searchCoord=126.92406177520753;37.55662179786924&page="+page+"&displayCount="+count+"&isPlaceRecommendationReplace=true&lang=ko";
		JSONObject json = null;
		try {
			Connection.Response html =  Jsoup.connect(url)
					.method(Connection.Method.GET)
					.userAgent(USER_AGENT)
					.ignoreContentType(true)
					.execute();
					json = new JSONObject(html.parse().select("body").text());
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONArray jsonArr = json.getJSONObject("result")
				.getJSONObject("place")
				.getJSONArray("list");
		for(int i=0;i <jsonArr.length()-1; i++) {
			JSONObject j = jsonArr.getJSONObject(i);
			//name, tel, address, reviewCount
			trunk.put("name",j.get("name").toString());
			trunk.put("address", j.get("address").toString());
			trunk.put("phone", j.get("tel").toString());
			trunk.put("review",j.get("reviewCount").toString());
			box.add(trunk.get());
			
			center.setCname(j.get("name").toString());
			center.setCaddr(j.get("address").toString());
			center.setCphone(j.get("tel").toString());
			center.setCscore(j.get("reviewCount").toString());
			userMapper.insetMap(center);
		}
		System.out.println("담긴 값 "+ box);
		return box.get();
		
	}
	@Transactional
	public void insertCrawling() {
		int crawlingPage = 7, count = 20;
		String name  = "마포구 헬스장";
		for(int i=1; i <=crawlingPage; i++) {
			healthCenterCrawl(i,count,name);
		}
	}
	
}
