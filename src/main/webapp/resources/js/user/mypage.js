var mypage = mypage || {}
mypage = (() => {
	let context, img, css, js
	let mypage_vue_js
	let brd_js
	let existing_routine_js, app_js,navi_vue_js, auth_js

	let init = () => {
		context = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		mypage_vue_js = js + '/vue/user/mypage_vue.js'
		brd_js = js + '/brd/brd.js'
		existing_routine_js = js + '/user/existing_routine.js'
		app_js = js + '/app.js'
		navi_vue_js = js + '/vue/menu/navi_vue.js'
		auth_js  = js + '/user/auth.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(brd_js),
			$.getScript(existing_routine_js),
			$.getScript(app_js),
			$.getScript(navi_vue_js),
			$.getScript(auth_js)
		).done(() => {
			setContentView()
			gomodify()
			gochart()
			goroutine()
			gohelgram()
			goHome()
			goDictionary()
		}).fail(() => {
			alert('조졌다')
		})
	}
	let setContentView = () => {
		$('head').append(login_vue.login_head())
		$('.masthead2').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_main())
		$('h1[class="text-center"]').text('어서오세요 '+ sessionStorage.getItem('uname') +'님')
	}
	let gomodify = () => {
		$('a[class="myModify"] span')
			.click(e => {
				e.preventDefault()
				$('.masthead').remove()
				$('.page-footer').remove()
				$('#mainpage').empty()
				$('#mainpage').append(mypage_vue.mypage_modify({ css: $.css() }))
			})
		$('#security').click(e=>{
			e.preventDefault()
			alert('클릭')
		})
	}
	let gochart =()=>{
		$('a[class="myChart"] span'  )
		.click(e=>{
			e.preventDefault()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_chart(css))

		let dayInfo = new Date();
		let year = dayInfo.getFullYear();
		let mon = dayInfo.getMonth()+1;
		let day = dayInfo.getDate();
		var ctx1 = $('#myChart1');
		var ctx2 = $('#myChart2');
		var ctx3 = $('#myChart3');
		var ctx4 = $('#myChart4');
		var ctx5 = $('#myChart5');

		var myLineChart = new Chart(ctx1, {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [	{
					label: '내 월 별 근골격량',
					data: [0, 10, 5, 2, 20, 30, 45, 25, 35, 65, 23 ,11],
					backgroundColor: '#ff0066',
					borderColor: 'rgb(200, 0, 0)',
					borderWidth : 1,
					pointRadius : 5,
					pointHoverRadius : 10,
					pointBorderColor: 'yellow'
					},
					{label: '회원 평균 근골격량',
					borderColor: '#0000ff',
					data: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
					pointRadius : 5,
					pointHoverRadius : 10,
					fill:false
					}]
			},
			options: {
				maintainAspectRatio : false,
				animation : {
					animateScale : false,
					animateRotage : true
				}
				}
			});
		var gaugeChart = new Chart(ctx2,{
			type : 'tsgauge',
			data : {
				datasets : [{
					labels : ['저체중', '정상', '비만', '병신', '엄마', '아빠'],
					backgroundColor : ["#0fdc63", "#fd9704", "#ff7143"],
					borderWidth : 0,
					gaugeData : {
						value : 14,
						valueColor : "#ff7143"
					},
					gaugeLimits : [10, 18.5, 23, 25, 30],
				}]
			},
			options : {
				animation : {
					animateScale : false,
					animateRotage : true
				},
				maintainAspectRatio : false,
				title : {
					display : true,
					text : '나의 BMI 지수'
				},
				events : [],
				showMarkers : true
			}
		})//bmi
		
		var myPieChart = new Chart(ctx5,{
			type : 'pie',
			data :{
				labels : ['년도', '월', '일'],
				datasets : [{
					data : [year, mon, day],
					// backgroundColor : ['#f5bd4f', '#f08530', '#d85348', '#861e52', '#15567e', '#23a8c0', '#38af9b'],
					backgroundColor : ['Red', 'Black']
				}]
			},
			options:{
				cutoutPercentage: 80,
				scaleBeginAtZero : true,
				animation:{
					animateRotage : true,
					animateScale : false,
				},
				maintainAspectRatio : false,
				title:{
					display : true,
					text: '부위 별 운동 횟수'
			},
			}
		})
	})
	} //Chart End
	let goroutine = () => {
		$('a[class="myRoutine"] span')
			.click(e => {
				e.preventDefault()
				existing_routine.onCreate()
			})
	}
	let gohelgram = () => {
		$('a[class="myHelgram"] span')
			.click(e => {
				e.preventDefault()
				brd.onCreate()
			})
	}
	let goHome =()=>{
		$('#home').click(e=>{
			e.preventDefault()
			auth.login_home()
		})
	}
	let goDictionary=()=>{
		$('a[class="myDictionary"] span')
		.click(e=>{
			e.preventDefault()
			dictionary.onCreate()
		})
	}
	return { onCreate }
})()