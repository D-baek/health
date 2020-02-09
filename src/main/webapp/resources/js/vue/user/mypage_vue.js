"use strict"
var mypage_vue = mypage_vue || {}
mypage_vue ={
	mypage_main:()=>{
		return `
		<link rel="stylesheet" href="/web/resources/css/mypageMain.css"/>
		<h1 class="text-center"></h1>
	<div class="container">
	<div class="row">
	<div class="col-lg-4">
	<div class="our-team-main">
	<div class="team-front">
	<img class="img-fluid1" />
	<h3>회원정보 수정</h3>
	<p>Modifying member information</p>
	</div>
	<div class="team-back">
	<a href="#" class ="myModify">
		<span>
			<br />
			비밀번호, 전화번호 등</br>
			개인정보 수정을 원하신다면</br>
			이 쪽으로 들어와 주세요!</br>
		</span>
	</a>
	</div>
	</div>
	</div>
	<!--team-2-->
	<div class="col-lg-4">
	<div class="our-team-main">
	<div class="team-front">
	<img class="img-fluid2" />
	<h3>회원 그래프 보기</h3>
	<p>View Member Graphs</p>
	</div>
	<div class="team-back">
	<a href="#" class="myChart">
		<span>
		<br />
		부위 별 운동횟수,</br>
		운동기간, 운동횟수를</br>
		정리하여 보여드릴게요!</br>
		</span>
	</a>
</div></div></div>
	<!--team-3-->
	<div class="col-lg-4">
	<div class="our-team-main">
	<div class="team-front">
	<img class="img-fluid3" />
	<h3>내 루틴 보러가기</h3>
	<p>Check my routine</p>
	</div>
	<div class="team-back">
	<a href="#" class="myRoutine">
		<span>
		<br />
		내가 받은 루틴을 확인하고<br/>
		열심히 운동해서<br />
		헬린이 탈추우우울!!!
		</span>
	</a>
	</div>
	</div>
	</div>
	<!--team-4-->
	<div class="col-lg-4">
	<div class="our-team-main">
	<div class="team-front">
	<img class="img-fluid4" />
	<h3>내가 작성한 헬그램 보러가기</h3>
	<p>Go see my helgram</p>
	</div>
	<div class="team-back">
	<a href="#" class="myHelgram">
		<span>
		<br />
		지금까지 회원님께서<br />
		작성한 게시글들을<br />
		확인하러 가 볼까요?~ :)
		</span>
	</a>
	</div>
	</div>
	</div>
	<!--team-5-->
	<div class="col-lg-4">
	<div class="our-team-main">
	<div class="team-front">
	<img class="img-fluid5" />
	<h3>식단 관리</h3>
	<p>protein calculation and ingestion</p>
	</div>
	<div class="team-back">
	<a href="#" class="myProtein">
		<span>
		<br />
		몸 스펙에 맞춰 계산 된<br />
		충분한 단백질 섭취로<br />
		근손실 걱정은 손저어어얼!!
		</span>
	</a>
	</div>
	</div>
	</div>
	<!--team-6-->
	<div class="col-lg-4">
	<div class="our-team-main">
	<div class="team-front">
	<img src="http://placehold.it/110x110/2196f3/fff?text=Dilip" class="img-fluid" />
	<h3>Dilip Kevat</h3>
	<p>Web Designer</p>
	</div>
	<div class="team-back">
	<span>
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
	natoque penatibus et magnis dis parturient montes,
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
	natoque.
	</span>
	</div>
	</div>
	</div>
	<!--team-6-->
	</div>
	</div>`
	},
	mypage_modify: x=>{
		return `<link rel="stylesheet" href="${x.css}/mypageModify.css"/>
				<div class="main">
        <section class="myModify">
            <div class="container2">
                <div class="myModify-content">
                    <form method="POST" id="myModify-form" class="myModify-form">
                        <h2 class="form-title">개인정보를 바꾸시려구요?</h2>
                        <div class="form-group">
                            <input type="text" class="form-input" name="uname" id="newName" placeholder="이름을 입력하세요."/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                         <div class="form-group">
                            <input type="text" class="form-input" name="age" id="newAge" placeholder="나이를 입력하세요."/>
                        </div>
                        <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">성별</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                                <label class="form-check-label" for="gridRadios1">남성</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                <label class="form-check-label" for="gridRadios2">여성</label>
                                </div>
                        </div>
                        </div>
                        </fieldset>
                        <div class="form-group">
                            <input type="submit" name="submit" id="submit" class="form-submit" value="Modify up"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>`
	},
	mypage_chart: x=>{
		return `
		<link rel="stylesheet" href="${x}/mypageChart.css"/>
		<div class="chartUp">
			<div class="chart1">
				<canvas id="myChart1"></canvas>
			</div>
			<div class="chart2">
				<canvas id="myChart2"></canvas>
			</div>
		</div>
		
		<div class="chartDown">
			<div class="container">
				<div class="my-calendar clearfix">
					<div class="clicked-date">
					<div class="cal-day"></div>
					<div class="cal-date"></div>
					<div class="cal-todo">----------------------</div>
				</div>
					<div class="calendar-box">
					<div class="ctr-box clearfix">
						<button type="button" title="prev" class="btn-cal prev"></button>
						<span class="cal-month"></span>
						<span class="cal-year"></span>
						<button type="button" title="next" class="btn-cal next"></button>
					</div>
					<table class="cal-table">
						<thead>
						<tr>
							<th>S</th>
							<th>M</th>
							<th>T</th>
							<th>W</th>
							<th>T</th>
							<th>F</th>
							<th>S</th>
						</tr>
						</thead>
						<tbody class="cal-body"></tbody>
					</table>
					</div>
				</div>
				<!-- // .my-calendar -->
			</div>
				<div class="chart5">
					<canvas id="myChart5"></canvas>
			</div>
		</div>`
	}
}