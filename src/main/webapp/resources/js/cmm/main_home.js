var main_home = main_home || {}
main_home = (() => {
	let context, js, img
	let navi_vue_js //네비 
	let main_js, footer_js //메인화면,footer
	let auth_js

	let init = () => {
		context = $.ctx()
		js = $.js()
		img = $.img()
		navi_vue_js = js + '/vue/menu/navi_vue.js'
		main_js = js + '/vue/menu/main.js'
		footer_js = js + '/vue/menu/footer.js'
		
		auth_js = js+'/user/auth.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(navi_vue_js),
			$.getScript(main_js),
			$.getScript(footer_js),
			$.getScript(auth_js)
		)
		.done(() => {
			setContentView()
		})
		.fail(() => {})
	}
	let setContentView = () => {
		$('#wrapper').html(navi_vue.toolbar_sub())
		.append(`<div id="mainpage" class="content"></div>`)
		.append(footer.foot())
		$('#mainpage').append(main.main_vue({ img: img }))
		$('<a/>',{text : '로그인', id: 'a_login'})
		.appendTo('div[class="plane"] span')
		.click(e => {
			e.preventDefault()
			auth.onCreate()
		})
	}
			/*	$.each([ 잠시 주석
			{ text: '회원가입', id: 'join' },
			{ text: '로그인', id: 'login' },
			{ text: 'Mypage', id: 'mypage' },
			{ text: '루틴프로그램', id: 'routine' },
			{ text: '헬스타그램', id: 'article' },
			{ text: '트레이너/센터 찾기', id: 'center' }], (i, j) => {
				$('<li class="nav-item"><a id="' + j.id + '" class="nav-link js-scroll-trigger" href="#">' + j.text + '</a></li>')
					.appendTo('#navbarResponsive ul[class="navbar-nav ml-auto"]')
			})*/
	
			
			/*let navi_move =()=> { 잠시 주석
				$('#join').click(e=>{
					e.preventDefault()
					join.onCreate()
				})
				$('#login').click(e => {
					e.preventDefault()
					auth.onCreate()
				})
				$('#mypage').click(() =>{ mypage.onCreate() })
				$('#routine').click(function(){ 
					routine.onCreate()
				 })
				$('#article').click(function(){
					brd.onCreate()
				})
				$('#center').click(() => { 
					alert('센터')
					center.onCreate()
				})
			}*/
	return { onCreate }
})()

