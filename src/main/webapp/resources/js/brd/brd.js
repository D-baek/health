var brd = brd || {}
brd = (()=>{
	let _, js, css, img, brd_vuejs , profilejs
	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		brd_vuejs = js+'/vue/brd/brd_vue.js'
		profilejs = js+'/brd/profile.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(brd_vuejs),
			$.getScript(profilejs)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
		})
	}
	let setContentView=() => {
		$('.masthead2').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(brd_vue.brd_body())
		recent_updates()
		write()
	}
	let recent_updates =()=> {
		$('#recent_updates .card').remove()
		$.getJSON(_+'/post/list',d=>{
			$.each(d,(i,j)=>{
				$(`           <div class="card mx-auto custom-card" >
                                <div class="row post-header col-12 py-2 px-3">
                                    <div class="col-6 float-left "><h4>`+j.seq+`번째 게시글 </h4></div>
                                    <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                </div>
                                <img class="card-img" src="${_+'/resources/upload/'+j.img}" alt="Card image cap">
                                <div class="card-body px-3">
                                    <h5 class="card-title">1000 Likes</h5>
                                    <p class="card-text">`+j.content+`</p>
                                </div>
                                 <div class="row post-header px-3 pb-3">
                                    <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                    <div class="col-10 float-left text-left">Comment...</div>
                                    <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>       
							</div>

							<div class="modal fade" id="myFullsizeModal${j.seq}" tabindex="-1" role="dialog" aria-labelledby="myFullsizeModalLabel">
							    <div class="modal-dialog modal-fullsize"  role="document">
							        <div class="modal-content modal-fullsize">
							            <div class="modal-header">
							                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							                <h4 class="modal-title">${j.seq}</h4>
							            </div>
							            <div class="modal-body">
							                <img class="card-img" src="${_+'/resources/upload/'+j.img}" alt="Card image cap">
							                <input type="text" class="modal-content" value="${j.content}">
							            </div>
							            <div class="modal-footer">
							                <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
							                <button type="button" class="btn modify" data-dismiss="modal">수정</button>
							                <button type="button" class="btn delete" data-dismiss="modal">삭제</button>
							            </div>
							        </div>
							    </div>
							</div>
					`
				)
				.appendTo('#recent_updates')
				.click(()=>{
					$(`#myFullsizeModal${j.seq}`).modal()
					update(j)
					brd_delete(j)
				})
			})
		})
	}
	let write=()=>{
		$('<button>', { type:'button', text :'Publish'})
		.addClass('btn btn-success btn-sm')
		.appendTo('#write_form')
		.click(e=>{
			e.preventDefault()
				let json ={
					content: $('#exampleModal textarea').val()
				}
			$.ajax({
				url:_+'/post/',
				type:'PUT',
				data: JSON.stringify(json),
				dataType :'json',
				contentType : 'application/json',
				success : d =>{
					$('#exampleModal').modal("hide")
					onCreate()						
				},
				error : e =>{
					alert('ajax 실패')
				}
			})
		})
		$('<input>',{type:"file",id:"upload"})
		.appendTo('.modal-body')
		$('<i>')
		.addClass('fas fa-camera-retro p-1 border rounded mt-1')
		.appendTo('.modal-body')
		.click(e=>{
			e.preventDefault()
			let formData = new FormData()
			let files = $('#upload')[0].files  //[0] 은 아래 for문이 length 배열이라서 길이… 아마 저자는 파일말고 텍스트라던지 다른것들도 같이 업로드하려고 배열을 쓰지 않았을까 추측함!
			let i = 0
			for(i=0; i<files.length; i++){
				formData.append("uploadFile",files[i])
			}
			$.ajax({
				url:_+'/post/fileupload',
				processData:false,
				contentType:false,
				data:formData,
				type:'POST',
				success:d=>{
					alert('파일업로드성공')
				},
				error:d=>{
					alert('파일업로드 실패')
				}
			})
		})
		$('#btn-profile')
		.click(()=>{
			profile.onCreate()
		})
		
	}
	
	let update=x=>{
		$(`#myFullsizeModal${x.seq} div div div button.btn.modify`)
		.click(e=>{
			e.preventDefault()
			let data = {content:$(`#myFullsizeModal${x.seq} div div div input`).val(),
				seq:x.seq
				}
			$.ajax({
				url:_+'/post/update/'+x.seq,
				type:'PUT',
				data: JSON.stringify(data),
				dataType:'json',
				contentType: 'application/json',
				success:d=>{
					recent_updates()
				},
				error: e=>{
					alert('에러발생')
				}
			})
		})
	}
	let brd_delete=x=>{
		$(`#myFullsizeModal${x.seq} div div div button.btn.delete`)
		.click(e=>{
			e.preventDefault()
	
			$.ajax({
				url:_+'/post/delete/'+x.seq,
				type:'DELETE',
				data: JSON.stringify({seq:x.seq}),
				dataType:'json',
				contentType: 'application/json',
				success:d=>{
					recent_updates()
				},
				error: e=>{
					alert('에러발생')
				}
			})
		})
	}
	return { onCreate }
})()