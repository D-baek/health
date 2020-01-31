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
		$('h1[class="text-center"]').text('어서오세요'+ sessionStorage.getItem('uname') +'님')
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
		
		var ctx1 = $('#myChart1');
		var myPieChart = new Chart(ctx1,{
			type : 'pie',
			data :{
				labels : ['Chest', 'Back', 'Shoulder', 'Biceps', 'Triceps', 'Legs', 'Abdominals'],
				datasets : [{
					data : [12, 6, 5, 8, 5, 2, 6],
					backgroundColor : ['#f5bd4f', '#f08530', '#d85348', '#861e52', '#15567e', '#23a8c0', '#38af9b'],
				}]
			},
			options:{
				maintainAspectRatio : false,
				title:{
					display : true,
					text: '부위 별 운동 횟수'
			},
			}
		})
		var ctx2 = $('#chart-container');
		var dataSource = {
			chart: {
				caption: "나의 BMI 지수",
				labels : ['저체중', '정상', '과체중', '비만'],
				lowerlimit: "10",
				upperlimit: "40",
				showvalue: "1",
				numbersuffix: "%",
				theme: "fusion",
				showtooltip: "0"
			},
			colorrange: {
				color: [
				{
					minvalue: "0",
					maxvalue: "18.5",
					code: "#62B58F"
				},
				{
					minvalue: "18.5",
					maxvalue: "23",
					code: "#FFFF00"
				},
				{
					minvalue: "23",
					maxvalue: "25",
					code: "#FF9900"
				},
				{
					minvalue: "25",
					maxvalue: "30",
					code: "#F2726F"
				},
				{
					minvalue: "30",
					maxvalue: "40",
					code: "#F2726F"
				}
				]
			},
			dials: {
				dial: [
				{
					label : "나의 신체질량지수(BMI)",
					value: "21"
				}
				]
			}
			};
			FusionCharts.ready(function() {
			var myChart = new FusionCharts(ctx2,{
				type: "angulargauge",
				renderAt: "chart-container",
				width: "100%",
				height: "100%",
				dataFormat: "json",
				dataSource
			}).render();
			});
		var ctx3 = $('#myChart3');
		var currentTitle = document.getElementById('current-year-month');
		var calendarBody = document.getElementById('calendar-body');
		var today = new Date();
		var first = new Date(today.getFullYear(), today.getMonth(),1);
		var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
		var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
		var pageFirst = first;
		var pageYear;
		if(first.getFullYear() % 4 === 0){
			pageYear = leapYear;
		}else{
			pageYear = notLeapYear;
		}

		function showCalendar(){
			let monthCnt = 100;
			let cnt = 1;
			for(var i = 0; i < 6; i++){
				var $tr = document.createElement('tr');
				$tr.setAttribute('id', monthCnt);   
				for(var j = 0; j < 7; j++){
					if((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]){
						var $td = document.createElement('td');
						$tr.appendChild($td);     
					}else{
						var $td = document.createElement('td');
						$td.textContent = cnt;
						$td.setAttribute('id', cnt);                
						$tr.appendChild($td);
						cnt++;
					}
				}
				monthCnt++;
				calendarBody.appendChild($tr);
			}
		}
		showCalendar();

		function removeCalendar(){
			let catchTr = 100;
			for(var i = 100; i< 106; i++){
				var $tr = document.getElementById(catchTr);
				$tr.remove();
				catchTr++;
			}
		}
		function reshowingList(){
    keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
    if(todoList[keyValue] === undefined){
        inputList.textContent = '';
        todoList[keyValue] = [];
        const $divs = document.querySelectorAll('#input-list > div');
        $divs.forEach(function(e){
          e.remove();
        });
        const $btns = document.querySelectorAll('#input-list > button');
        $btns.forEach(function(e1){
          e1.remove();
        });
    }else if(todoList[keyValue].length ===0){
        inputList.textContent = "";
        const $divs = document.querySelectorAll('#input-list > div');
        $divs.forEach(function(e){
          e.remove();
        });
        const $btns = document.querySelectorAll('#input-list > button');
        $btns.forEach(function(e1){
          e1.remove();
        });
    }else{
        const $divs = document.querySelectorAll('#input-list > div');
        $divs.forEach(function(e){
          e.remove();
        });
        const $btns = document.querySelectorAll('#input-list > button');
        $btns.forEach(function(e1){
          e1.remove();
        });
        var $div = document.createElement('div');
        for(var i = 0; i < todoList[keyValue].length; i++){
            var $div = document.createElement('div');
            $div.textContent = '-' + todoList[keyValue][i];
            var $btn = document.createElement('button');
            $btn.setAttribute('type', 'button'); 
            $btn.setAttribute('id', 'del-ata');
            $btn.setAttribute('id', dataCnt+keyValue);
            $btn.setAttribute('class', 'del-data');
            $btn.textContent = delText;
            inputList.appendChild($div);
            inputList.appendChild($btn);
            $div.addEventListener('click',checkList);
            $btn.addEventListener('click',deleteTodo);
            inputBox.value = '';
            function deleteTodo(){
                $div.remove();
                $btn.remove();
            }
        }
    }
}
		var inputBox = document.getElementById('input-box');
		var inputDate = document.getElementById('input-data');
		var inputList = document.getElementById('input-list');
		var delText = 'X';
		inputDate.addEventListener('click',addTodoList);
		var dataCnt = 1;
		var keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
		let todoList = [];
		todoList[keyValue] = [];
		function addTodoList(){
			var $div = document.createElement('div');
			$div.textContent = '-' + inputBox.value;
			var $btn = document.createElement('button');
			$btn.setAttribute('type', 'button'); 
			$btn.setAttribute('id', 'del-ata');
			$btn.setAttribute('id', dataCnt+keyValue);
			$btn.setAttribute('class', "del-data");
			$btn.textContent = delText;
			inputList.appendChild($div);
			inputList.appendChild($btn);
			todoList[keyValue].push(inputBox.value);
			dataCnt++;
			inputBox.value = '';
			$div.addEventListener('click',checkList);
			$btn.addEventListener('click',deleteTodo);
			function deleteTodo(){
				$div.remove();
				$btn.remove();
			}
		}
		console.log(keyValue);
		function checkList(e){
			e.currentTarget.classList.add('checked');
		}
		var ctx4 = $('#myChart4');
		var myLineChart = new Chart(ctx4, {
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
			// Configuration options go here
			options: {
				maintainAspectRatio : false,
				}
			});
		})
	}
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