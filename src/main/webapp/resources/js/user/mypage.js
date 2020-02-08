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

		let currentTitle = document.getElementById('current-year-month');
		let calendarBody = document.getElementById('calendar-body');
		let today = new Date();
		let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		let monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		// let first = new Date(today.getFullYear(), today.getMonth(),1);
		let first = new Date(today.getFullYear(), today.getMonth()+1);
		let years = today.getFullYear();
		let monrths = today.getMonth()+1;
		let day = today.getDate();
		let dayName = dayList[today.getDay()];
		let leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
		let notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
		let pageFirst = first;
		let pageYear;
		if(first.getFullYear() % 4 ===0){
			pageYear = leapYear;
		}else{
			pageYear = notLeapYear;
		}
		var ctx1 = $('#myChart1');
		var ctx2 = $('#myChart2');
		var ctx5 = $('#myChart5');

		//line
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
			}); //line end
		//bmi
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
		})//bmi end	
		//todo & cal
		const init = {
			monList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			today: new Date(),
			monForChange: new Date().getMonth(),
			activeDate: new Date(),
			getFirstDay: (yy, mm) => new Date(yy, mm, 1),
			getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
			nextMonth: function () {
				let d = new Date();
				d.setDate(1);
				d.setMonth(++this.monForChange);
				this.activeDate = d;
				return d;
			},
			prevMonth: function () {
				let d = new Date();
				d.setDate(1);
				d.setMonth(--this.monForChange);
				this.activeDate = d;
				return d;
			},
			addZero: (num) => (num < 10) ? '0' + num : num,
			activeDTag: null,
			getIndex: function (node) {
				let index = 0;
				while (node = node.previousElementSibling) {
				index++;
				}
				return index;
			}
			};

			const $calBody = document.querySelector('.cal-body');
			const $btnNext = document.querySelector('.btn-cal.next');
			const $btnPrev = document.querySelector('.btn-cal.prev');

			/**
			 * @param {number} date
			 * @param {number} dayIn
			*/
			function loadDate (date, dayIn) {
			document.querySelector('.cal-date').textContent = date;
			document.querySelector('.cal-day').textContent = init.dayList[dayIn];
			}

			/**
			 * @param {date} fullDate
			 */
			function loadYYMM (fullDate) {
			let yy = fullDate.getFullYear();
			let mm = fullDate.getMonth();
			let firstDay = init.getFirstDay(yy, mm);
			let lastDay = init.getLastDay(yy, mm);
			let markToday;  // for marking today date
			
			if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
				markToday = init.today.getDate();
			}

			document.querySelector('.cal-month').textContent = init.monList[mm];
			document.querySelector('.cal-year').textContent = yy;

			let trtd = '';
			let startCount;
			let countDay = 0;
			for (let i = 0; i < 6; i++) {
				trtd += '<tr>';
				for (let j = 0; j < 7; j++) {
				if (i === 0 && !startCount && j === firstDay.getDay()) {
					startCount = 1;
				}
				if (!startCount) {
					trtd += '<td>'
				} else {
					let fullDate = yy + '.' + init.addZero(mm + 1) + '.' + init.addZero(countDay + 1);
					trtd += '<td class="day';
					trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';
					trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
				}
				trtd += (startCount) ? ++countDay : '';
				if (countDay === lastDay.getDate()) { 
					startCount = 0; 
				}
				trtd += '</td>';
				}
				trtd += '</tr>';
			}
			$calBody.innerHTML = trtd;
			}

			/**
			 * @param {string} val
			 */
			function createNewList (val) {
			let id = new Date().getTime() + '';
			let yy = init.activeDate.getFullYear();
			let mm = init.activeDate.getMonth() + 1;
			let dd = init.activeDate.getDate();
			const $target = $calBody.querySelector(`.day[data-date="${dd}"]`);

			let date = yy + '.' + init.addZero(mm) + '.' + init.addZero(dd);

			let eventData = {};
			eventData['date'] = date;
			eventData['memo'] = val;
			eventData['complete'] = false;
			eventData['id'] = id;
			init.event.push(eventData);
			$todoList.appendChild(createLi(id, val, date));
			}

			loadYYMM(init.today);
			loadDate(init.today.getDate(), init.today.getDay());

			$btnNext.addEventListener('click', () => loadYYMM(init.nextMonth()));
			$btnPrev.addEventListener('click', () => loadYYMM(init.prevMonth()));

			$calBody.addEventListener('click', (e) => {
			if (e.target.classList.contains('day')) {
				if (init.activeDTag) {
				init.activeDTag.classList.remove('day-active');
				}
				let day = Number(e.target.textContent);
				loadDate(day, e.target.cellIndex);
				e.target.classList.add('day-active');
				init.activeDTag = e.target;
				init.activeDate.setDate(day);
				reloadTodo();
			}
			});
		//todo & cal end
		//pie
		var myPieChart = new Chart(ctx5,{
			type : 'pie',
			data :{
				labels : ['월', '화', '수', '목', '금', '토', '일'],
				datasets : [{
					data : [3, 5, 6, 2, 6, 8, 6],
					backgroundColor : ['#f5bd4f', '#f08530', '#d85348', '#861e52', '#15567e', '#23a8c0', '#38af9b'],
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
	})// pie end
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