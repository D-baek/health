package com.health.web.user;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.enums.SQL;
import com.health.web.pxy.Box;
import com.health.web.pxy.CrawlingProxy;
import com.health.web.pxy.Trunk;
import com.health.web.util.Printer;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired User user; @Autowired UserMapper userMapper; @Autowired Printer print; 
	@Autowired Trunk<Object> trunk; @Autowired Box<Object> box; @Autowired CrawlingProxy crawler;
   
	
	
	@PostMapping("/join")
	public Map<?,?> signUp(@RequestBody User param) {
		print.accept("회원가입 진입");
		print.accept("ajax에서 넘어온 데이터 : " + param);
		Consumer<User> consumer = t-> userMapper.signUp(t);
		consumer.accept(param);
		trunk.put("msg", "success");
		return trunk.get();
		
	}
	@PostMapping("/login")
	public Map<?, ?> signIn(@RequestBody User param){
		print.accept("로그인 진입");
		print.accept("ajax에서 넘어온 아이디 & 비번 :" +param.getUserid() +'\t'+ param.getPasswd());
		Function<User, User> function = t-> userMapper.login(t);
		user = function.apply(param);
		String result = (user != null) ? "success" : "fail" ;
		print.accept("성공여부 : "+result +"\n" + user);
		trunk.clear();
		trunk.put("msg", result);
		trunk.put("user", user);
//		trunk.put(Arrays.asList("msg","user"), Arrays.asList(result,user));
		print.accept("보내는 값 : "+ trunk.get());
		return trunk.get();
	}
	@GetMapping("/exist/{userid}")
	public Map<?,?> dupleCheck(@PathVariable String userid){
		Function<String, Integer> function = t -> userMapper.existId(t);
		trunk.clear();
		trunk.put("msg", (function.apply(userid) !=0) ? "Y" : "N");
		return trunk.get();
	}
	@GetMapping("/create/center")
	public Map<?, ?> makeTable(){
		HashMap<String, String> paramMap = new HashMap<>();
		print.accept("테이블생성 들어옴");
		paramMap.put("CREATE_CENTER",SQL.CREATE_CENTER.toString());
		Consumer<HashMap<String, String>> consumer = t-> userMapper.createCenter(paramMap);
		consumer.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "success");
		return paramMap;
	}
	@PutMapping("/{userid}")
	public User makeRoutine(@PathVariable String userid, @RequestBody User param) {
		print.accept("루틴 만들기 도착");
		print.accept("아이디" + param);
		Consumer<User> c = o -> userMapper.makeRoutine(param);
		c.accept(param);
		Function<User, User> f = t -> userMapper.selectUpdatedUser(param);
		return f.apply(param);
	}
}
