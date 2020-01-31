package com.health.web.enums;

public enum Path {
UPLOAD_PATH, CRAWLING_TARGET;
	
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case UPLOAD_PATH:
			result = "C:\\Users\\bit\\spring4\\CATDOG-SPV-WORKSPACE\\SB4\\src\\main\\webapp\\resources\\upload\\";
			break;
		case CRAWLING_TARGET:
			break;
		}
		return result;
	}
}
