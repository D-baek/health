package com.health.web.tx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.health.web.center.Center;
import com.health.web.pxy.CrawlingProxy;

@Service
public class TxService {
	@Autowired CrawlingProxy crawler;
	@Autowired Center center;
	
	@Transactional
	public void centerCrawling() {
		crawler.insertCrawling();
	}
}
