"use strict"
var profile_vue = profile_vue || {}
profile_vue = {
		
	profile_head : x=>{
		return `
		
		`
	},
	profile_body : x=>{
		return `
		<link href="${x.css}/profile.css" rel="stylesheet">
			<div>
			<div style="margin-top: 92px">
            <div class="navbar navbar-light sticky-top bg-light">
            <a class="navbar-brand" href="#" id="go_brdMain"><i class="fab fa-instagram"></i> Healthtagram</a>
            </div>
        </div>
    <main id="profile">
        <header class="profile__header">
            <div class="profile__column">
                <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/s150x150/75491385_1167951500081658_8814466561587806208_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_ohc=lHswV08GKhQAX-DRMw-&oh=063c403353f50962e96f690b29ba72c2&oe=5EB5E527" alt="user" />
            </div>
            <div class="profile__column">
                <div class="profile__title">
                    <h3 class="profile__username">serranoarevalo</h3>
                     <button id="btn-edit-profile" class="btn profile-edit-btn">Edit Profile</button>
		             <button id="btn-write" class="btn profile-edit-btn">사진 올리기</button>

                    <i class="fa fa-cog fa-lg"></i>
                </div>
                <ul class="profile__stats">
                    <li class="profile__stat">
                        <span class="stat__number">333</span> posts
                    </li>
                    <li class="profile__stat">
                        <span class="stat__number">1234</span> followers
                    </li>
                    <li class="profile__stat">
                        <span class="stat__number">36</span> following
                    </li>
                </ul>
                <p class="profile__bio">
                    <span class="profile__full-name">
                        Nicolás Serrano Arévalo
                    </span> Doing whatever and eating Pho Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Ducimus suscipit praesentium eveniet quibusdam ipsam omnis fugit. Tempore voluptates ratione recusandae
                    natus illo perspiciatis suscipit, odio consequuntur quasi obcaecati minus! Omnis.
                    <a href="#">serranoarevalo.com</a>
                </p>
            </div>
        </header>
        <section class="profile__photos">
            <div class="profile__photo">
                <img src="https://i.pinimg.com/564x/48/73/38/48733857661e99159d88a8eee1d28219.jpg" />
                <div class="profile__photo-overlay">
                    <span class="overlay__item">
                        <i class="fa fa-heart"></i>
                        486
                    </span>
                    <span class="overlay__item">
                        <i class="fa fa-comment"></i>
                        344
                    </span>
                </div>
            </div>
            <div class="profile__photo">
                <img src="https://i.pinimg.com/564x/52/a6/f5/52a6f598f6a5c7c584314cc595708b32.jpg" />
                <div class="profile__photo-overlay">
                    <span class="overlay__item">
                            <i class="fa fa-heart"></i>
                            486
                        </span>
                    <span class="overlay__item">
                            <i class="fa fa-comment"></i>
                            344
                        </span>
                </div>
            </div>
            <div class="profile__photo">
                <img src="https://i.pinimg.com/564x/52/a6/f5/52a6f598f6a5c7c584314cc595708b32.jpg" />
                <div class="profile__photo-overlay">
                    <span class="overlay__item">
                                <i class="fa fa-heart"></i>
                                486
                            </span>
                    <span class="overlay__item">
                                <i class="fa fa-comment"></i>
                                344
                            </span>
                </div>
            </div>
            <div class="profile__photo">
                <img src="https://i.pinimg.com/564x/52/a6/f5/52a6f598f6a5c7c584314cc595708b32.jpg" />
                <div class="profile__photo-overlay">
                    <span class="overlay__item">
                                    <i class="fa fa-heart"></i>
                                    486
                                </span>
                    <span class="overlay__item">
                                    <i class="fa fa-comment"></i>
                                    344
                                </span>
                </div>
            </div>
        </section>
    </main>
		`
	},
	write_form: x=>{
		return `
		
		<div style="margin-top: 92px">
            <div class="navbar navbar-light sticky-top bg-light">
            <a class="navbar-brand" href="#" id="go_brdMain"><i class="fab fa-instagram"></i> Healthtagram</a>
        </div>
		<div class="container">
		<div class="box">
			<div class="bigbox">


				<div class="text">
					<hr class="hr" />
					사진업로드
					<hr class="hr" />
				</div>
			
				<form id="upload_form" method="post" enctype="multipart/form-data">
					<table class="table">
						<tr>
							<p>
        			<label for="image">Image:</label>
        			<br />
        			<input type="file" name="image" id="image" />
    					</p>
						</tr>
						<tr>
							<td>
								<div id="image_preview">
									<img src="#" />
      						  		<br />
     						    <a href="#">Remove</a>
								</div>
							</td>
						</tr>
						<tr>
							<td><input type="text" id="content" name="content" placeholder="이미지 소개"></td>
						</tr>
						<tr>
							<td><input type="text" id="location" name="location" placeholder="위치"></td>
						</tr>
						<tr>
							<td><input type="text" id="tagname" name="tagname" placeholder="#태그"></td>
						</tr>
					</table>
				</form>
			</div>
			</div>
		</div>
	</div>

		
		`
	}
}
