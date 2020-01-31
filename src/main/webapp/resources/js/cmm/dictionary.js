"use strict"
var dictionary = dictionary || {}
dictionary=(()=>{
	let context, js, img, mypage_js, mypage_vue_js

	let init=()=>{
		context = $.ctx()
		js = $.js()
		img =$.img()
		mypage_js = js+'/user/mypage.js'
		mypage_vue_js = js+'/vue/user/mypage_vue.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mypage_js),
			$.getScript(mypage_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{"븅신"})
	}
	let setContentView =()=>{
		alert('사전 진입 성공!')
	}
	return{onCreate}
})()