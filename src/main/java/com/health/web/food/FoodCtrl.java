package com.health.web.food;

import java.util.List;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.pxy.Trunk;
import com.health.web.util.Printer;

@RestController
@RequestMapping("/food")
public class FoodCtrl {
	@Autowired Trunk<Object> trunk;
	@Autowired
	Food food;
	@Autowired
	Printer printer;
	@Autowired
	FoodMapper foodMapper;
	
	@GetMapping("/{weight}")
	public List<Food> proteinCalc(@PathVariable String weight) {
		printer.accept("단백질컨트롤러 도착");
		Supplier<List<Food>> s = ()-> foodMapper.selectAll();
		System.out.println(s.get());
		return s.get();
	}
}
