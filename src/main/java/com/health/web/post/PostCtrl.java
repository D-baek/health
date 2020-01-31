package com.health.web.post;

import java.io.File;

import java.io.IOException;
import java.util.Arrays;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.health.web.enums.Path;
import com.health.web.pxy.Trunk;

@RestController
@RequestMapping("/post")
public class PostCtrl {
	@Autowired PostMapper postMapper;
	@Autowired Trunk<Object> trunk;
	
	@PutMapping("/")
	public Map<?,?> writeBrd(@RequestBody Post param){
		System.out.println("글쓰기 들어옴"+ param.getContent());
		Consumer<Post> c = t -> postMapper.insertPost(t);
		c.accept(param);
		
		Supplier<String> s =()->  postMapper.countArtseq();
		trunk.put(Arrays.asList("msg","count"),Arrays.asList("SUCCESS",s.get()));
		return trunk.get();
	}
	
	@GetMapping("/list")
	public List<Post> list(){
		System.out.println("리스트 들어옴");
		Supplier<List<Post>> s= ()-> postMapper.selectAll();
		return s.get(); 
	}
	
	@GetMapping("/read/{seq}")
	public Post readBrd(@PathVariable String seq) {
		Supplier<Post> c = ()-> postMapper.selectPost(seq);
		return c.get();
	}
	
	@PutMapping("/update/{seq}")
	public Post updateBrd(@PathVariable String seq, @RequestBody Post param) {
		System.out.println("수정 들어옴");
		System.out.println("수정 글번호" + param.getPostno());
		Consumer<Post> c = t -> postMapper.updatePost(param);
		c.accept(param);
		Supplier<Post> d = ()-> postMapper.selectPost(seq);
		return d.get();
		
	}
	
	@DeleteMapping("/delete/{seq}")
	public Map<?,?> deleteBrd(@PathVariable String seq, @RequestBody Post param){
		System.out.println("삭제 들어옴 삭제번호는 " +param.getPostno());
		Consumer<Post> c = t-> postMapper.deletePost(param);
		c.accept(param);
		trunk.put(Arrays.asList("msg"), Arrays.asList("success"));
		return trunk.get();
	}
	
	@PostMapping("/fileupload")
	public void fileUpload(MultipartFile[] uploadFile,
		      @RequestParam String content, @RequestParam String tagname, @RequestParam int postno) {
		System.out.println("넘어온콘텐츠값"+content);
		Post post = new Post();
		Tag tag = new Tag();
		
		UUID uuid = UUID.randomUUID();
		String uploadFolder = Path.UPLOAD_PATH.toString();
		for(MultipartFile multipartFile : uploadFile) {
			String uploadFileName = uuid+ "_"+multipartFile.getOriginalFilename();
			
			uploadFileName = uploadFileName.substring(uploadFileName.lastIndexOf("\\")+1);
			post.setImg(uploadFileName);
			File saveFile = new File(uploadFolder,uploadFileName);
			try {
				multipartFile.transferTo(saveFile);  //이거 글자치면 try catch가 자동으로 뜸
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	
		post.setContent(content);
		tag.setTagname(tagname);
		tag.setPostno(postno);
		
		Consumer<Post> c = t -> postMapper.insertPost(t);
		c.accept(post);
		/*
		 * @PostMapping("/fileupload") public void fileUpload(MultipartFile[]
		 * uploadFile) { // System.out.println("넘어온콘텐츠값"+param.getContent()); Brd brd =
		 * new Brd();
		 * 
		 * UUID uuid = UUID.randomUUID(); String uploadFolder =
		 * Path.UPLOAD_PATH.toString(); for(MultipartFile multipartFile : uploadFile) {
		 * String uploadFileName = uuid+ "_"+multipartFile.getOriginalFilename();
		 * 
		 * uploadFileName =
		 * uploadFileName.substring(uploadFileName.lastIndexOf("\\")+1); File saveFile =
		 * new File(uploadFolder,uploadFileName); try {
		 * multipartFile.transferTo(saveFile); //이거 글자치면 try catch가 자동으로 뜸 } catch
		 * (Exception e) { e.printStackTrace(); } }
		 */
	}

}
