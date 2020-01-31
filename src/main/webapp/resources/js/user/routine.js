var routine = routine || {}
routine = (()=>{
	let context,img,css,js
	let routine_vue_js //루틴화면
	let navi_vue_js, auth_js
	let existing_routine_js

	let init =()=>{
		context = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		routine_vue_js = js + '/vue/routine/routine_vue.js'
		auth_js = js + '/user/auth.js'
		existing_routine_js = js + '/user/existing_routine.js'
		navi_vue_js = js + '/vue/menu/navi_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(routine_vue_js),
			$.getScript(auth_js),
			$.getScript(existing_routine_js),
			$.getScript(navi_vue_js)
		)
		.done(()=>{
			setContentView() 
			createRoutine()
			existRoutine()
			gohome() 
		})
		.fail(()=>{alert(`실패`)})
	}
	let setContentView =()=>{
		$('head').append(routine_vue.routine_style({img :img}))
		$('.masthead2').remove()
		$('.page-footer').remove()
		$('#mainpage').html(routine_vue.routine_page({img : img}))

	}
	let createRoutine =()=>{
		$('#newRoutine').click(function(){
			$('#fullHeightModalRight').modal('show')
			$('#save_routine').click(e=>{
				alert(sessionStorage.getItem('userid'))
				e.preventDefault()
				$.ajax({
					url: context+'/users/'+sessionStorage.getItem('userid'),
					type: 'PUT',
					dataType: 'json',
					contentType: 'application/json',
					data: JSON.stringify({
						userid : sessionStorage.getItem('userid'),
						uname : sessionStorage.getItem('uname'),
						height : $('#setModal input[name="height"]').val(),
						weight : $('#setModal input[name="weight"]').val(),
						muscle : $('#setModal input[name="muscle"]').val(),
						fat : $('#setModal input[name="fat"]').val(),
						career : $('#setModal input[name="career"]').val(),
						division : $('#setModal input[name="division"]').val(),
				}),
				success : d => {
					alert('ajax성공')
					sessionStorage.setItem('height', d.height)
					sessionStorage.setItem('weight', d.weight)
					localStorage.setItem('muscle', d.muscle)
					localStorage.setItem('fat', d.fat)
					localStorage.setItem('career', d.career)
					localStorage.setItem('division', d.division)
					auth.login_home()
				},
				error : function(request,status,error){
					alert("error code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
				})
			})
		})
	}
	let existRoutine =()=>{
		$('#existRoutine').click(()=>{
			alert(localStorage.getItem('fat'))
			if(localStorage.getItem('fat') == 0){
				alert('새루틴 만들기를 먼저 완료하세요')
			}else{
				existing_routine.onCreate()
			}
		})
	}
	let gohome =()=>{
		$('#home').click(e=>{
			e.preventDefault()
			auth.login_home()
		})
	}
	return { onCreate }
})()