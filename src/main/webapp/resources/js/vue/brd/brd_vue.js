var brd_vue = brd_vue || {}
brd_vue = {
	brd_head: ()=>{
		return `
        
		`
	},
	brd_body: ()=>{
		return ` 
        <div style="margin-top: 92px">
            <div class="navbar navbar-light sticky-top bg-light">
            <a class="navbar-brand" href="#"><i class="fab fa-instagram"></i> Healthtagram</a>
            <div class="search">
                <em>#HashTags</em> <input type="text" value="검색">
                <button class="fa fa-search fa-2x btn btn-berem" id="bcr_instagsbtn"></button>
            </div>
            <ul class="nav ">
                <li class="nav-item">
                    <button type="button" class="btn btn-primary btn-md btn-success" data-toggle="modal" data-target="#exampleModal">Create a new post</button>
                </li>
                <li class="nav-item dropdown">
                    <button id="btn-profile" class="btn btn-primary btn-md btn-profile"> 프로필 </button>      
                </li>
            </ul>
            </div>
        </div>
        
        <!-- Modal Begin -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-body">
                  <textarea name="write" class="form-control" aria-label="With textarea"></textarea>
                  <!--<input class="form-control mr-sm-2 custom-search-modal" type="search" placeholder="" aria-label="Search">-->
              </div>
              <div class="modal-footer" id="write_form">
                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div> <!-- modal end -->
    
        <div class="container-fluid ">
          <!-- Nav pills -->
            <ul class="nav nav-pills justify-content-center mt-4" role="tablist">
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#home"><i class="fa fa-square" aria-hidden="true"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#menu2"><i class="fa fa-th" aria-hidden="true"></i></a>
                </li>
            </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div id="home" class="container-fluid tab-pane active "><br>
                    <div class="row justify-content-center">
                        <div  id="recent_updates">
                            <div class="">
                                <div class="card mx-auto custom-card" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My first post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/images.php?blob&tags=bobdylan" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                                
                                <div class="card mx-auto custom-card mt-3" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My Second post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/funny/kids.jpg" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                                
                                <div class="card mx-auto custom-card mt-3" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My Third post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/happy/bucket.jpeg" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                                
                                <div class="card mx-auto custom-card mt-3" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My fourth post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/funny/rigoberto.jpg" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                                
                                <div class="card mx-auto custom-card mt-3" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My fifth post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/meme/borat.success.jpg" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                                
                                <div class="card mx-auto custom-card mt-3" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My sixth post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/meme/baby.success.jpg" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                                
                                <div class="card mx-auto custom-card mt-3" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My seventh post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/funny/scared-baby.jpg" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                                
                                <div class="card mx-auto custom-card mt-3" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My eighth post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/happy/happy-dog2.jpg" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                                
                                <div class="card mx-auto custom-card mt-3" id="prova">
                                    <div class="row post-header col-12 py-2 px-3">
                                        <div class="col-6 float-left "><h4>My ninth post</h4></div>
                                        <div class="col-6 float-right text-right post-number"><h4>12/14</h4></div>
                                    </div>
                                    <img class="card-img" src="https://assets.breatheco.de/apis/img/happy/happy-dog.jpg" alt="Card image cap">
                                    <div class="card-body px-3">
                                        <h5 class="card-title">1000 Likes</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div class="row post-header px-3 pb-3">
                                        <div class="col-1 float-left text-left"><i class="far fa-heart"></i></i></div>
                                        <div class="col-10 float-left text-left">Comment...</div>
                                        <div class="col-1 float-right text-right"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                
                <div id="menu2" class="container-fluid tab-pane fade">
                    <div class="row ">
                        <div class="col-md-4 col-sm-6 px-1 my-1 ">
                            <img src="https://assets.breatheco.de/apis/img/images.php?blob&tags=bobdylan" alt="Card image cap" width="100%" height="350px">
                        </div>
                        <div class="col-md-4 col-sm-6 px-1 my-1 ">
                            <img src="https://assets.breatheco.de/apis/img/funny/kids.jpg" alt="Card image cap" width="100%" height="350px">
                        </div>
                        <div class="col-md-4 col-sm-6 px-1 my-1 ">
                            <img src="https://assets.breatheco.de/apis/img/happy/bucket.jpeg" alt="Card image cap" width="100%" height="350px">
                        </div>
                        <div class="col-md-4 col-sm-6 px-1 my-1 ">
                            <img src="https://assets.breatheco.de/apis/img/funny/rigoberto.jpg" alt="Card image cap" width="100%" height="350px">
                        </div>
                        <div class="col-md-4 col-sm-6 px-1 my-1">
                            <img src="https://assets.breatheco.de/apis/img/meme/borat.success.jpg" alt="Card image cap" width="100%" height="350px">
                        </div>
                        <div class="col-md-4 col-sm-6 px-1 my-1">
                            <img src="https://assets.breatheco.de/apis/img/meme/baby.success.jpg" alt="Card image cap" width="100%" height="350px">
                        </div>
                        <div class="col-md-4 col-sm-6 px-1 my-1">
                            <img src="https://assets.breatheco.de/apis/img/funny/scared-baby.jpg" alt="Card image cap" width="100%" height="350px">
                        </div>
                        <div class="col-md-4 col-sm-6 px-1 my-1">
                            <img src="https://assets.breatheco.de/apis/img/happy/happy-dog2.jpg" alt="Card image cap" width="100%" height="350px">
                        </div>
                        <div class="col-md-4 col-sm-6 px-1 my-1">
                            <img src="https://assets.breatheco.de/apis/img/happy/happy-dog.jpg" alt="Card image cap" width="100%" height="350px">
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>`
    },
    brd_write: ()=>{
        return `
        		<div class="modal fade" id="myFullsizeModal" tabindex="-1" role="dialog" aria-labelledby="myFullsizeModalLabel">
							<div class="modal-dialog modal-fullsize" role="document">
								<div class="modal-content modal-fullsize">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
									<h4 class="modal-title" id="myModalLabel"></h4>
								</div>
								<div class="modal-body">
									<img class="card-img" src="https://assets.breatheco.de/apis/img/images.php?blob&tags=bobdylan" alt="Card image cap">
									<input type="text" class="modal-content" value="">
								</div>
								<div class="modal-footer">	
									<button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
									<button type="button" class="btn btn-default-update" data-dismiss="modal">수정</button>
								</div>
								</div>
							</div>
							</div> 
        `
    }
}