package com.health.web.tx;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.pxy.CrawlingProxy;
import com.health.web.pxy.Trunk;
import com.health.web.util.Printer;

@RestController
@RequestMapping("/tx")
public class TxController {
	
	@Autowired CrawlingProxy crawler;
	@Autowired TxService txService;
	@Autowired Trunk<Object> trunk; @Autowired Printer printer;
	
	@GetMapping("/crawling/center")
	public Map<?,?> centerCrawling(){
		printer.accept("헬스센터 크롤링 진입");
		txService.centerCrawling();
		trunk.clear();
		trunk.put("msg", "success");
		return trunk.get();
	}
}
