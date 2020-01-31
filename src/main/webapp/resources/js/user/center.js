var center = center || {}
center = (()=>{
	let context,css,js,img
	let location = {}
	let search_map_js
	let markers = []
	let places = []
	let init =()=>{
		context = $.ctx()
		css = $.css()
		js = $.js()
		img = $.img()
		search_map_js = js + '/vue/menu/search_map.js'
	}
	let onCreate =()=>{
		init()
		navigator.geolocation.getCurrentPosition(function(pos) {
			location.lat = pos.coords.latitude
			location.lng = pos.coords.longitude
		})
		$.when(
			$.getScript(search_map_js)
		)
		.done(()=>{
			setContentView()
			mapUi()
			goHome()
			
		})
		.fail(()=>{})
	}
	let goHome =()=>{
		$('#home').click(e=>{
			e.preventDefault()
			auth.login_home()
		})
	}
	let setContentView =()=>{
		$('.masthead2').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(search_map.search())
		
		$('<button/>',{
			text : '크롤링 하기',
			type : 'submit'
		})
		.appendTo('#placesList')
		.click(e=>{
			$.getJSON(context + '/tx/crawling/center',d=>{
				if(d.msg === 'success'){alert(`크롤링 성공`)}
			})
		})
	}
	let mapUi =()=>{
		let mapContainer = document.getElementById('map'),
		mapOptions = { 
			center: new kakao.maps.LatLng(37.559965,126.942345), 
			level: 3 ,
		}
		let map = new kakao.maps.Map(mapContainer, mapOptions);
		map.setMapTypeId(daum.maps.MapTypeId.ROADMAP);
		
		$('<button/>',{text : '현재위치 가져오기',type : 'submit'})
		.appendTo('#placesList')
		.click(e=>{
			map.setCenter(new kakao.maps.LatLng(location.lat,location.lng))
		})
		let markerPosition = new kakao.maps.LatLng(37.559965,126.942345)
        let marker = new kakao.maps.Marker({
            position: markerPosition
        })
        marker.setMap(map)
        var mapTypes = {    
		    traffic :  kakao.maps.MapTypeId.TRAFFIC,
		    bicycle : kakao.maps.MapTypeId.BICYCLE
		}
		setOverlayMapTypeId(mapTypes)
	}
		let setOverlayMapTypeId =x=> {
			for (var type in x) {
				map.removeOverlayMapTypeId(x[type]);    
			}
		   $('#chkTraffic').click(()=>{
			   if (chkTraffic.checked) {
				   map.addOverlayMapTypeId(x.traffic);    
			   }
		   })
		   $('#chkBicycle').click(()=>{
			   if (chkBicycle.checked) {
				   map.addOverlayMapTypeId(x.bicycle);    
			   }
		   })
		}
//		let searchVal = document.getElementById('input_search')
//		let ps = new kakao.maps.services.Places()
//		ps.keywordSearch(searchVal.val(),placesSearchCB())
		
	
//	let placesSearchCB =(data,status,pagination)=>{
//		if(status === kakao.maps.services.Status.OK){
//			let bounds = new kakao.maps.LatLngBounds()
//			for(let i=0; i<data.length;i++){
//				displayMarker(data[i])
//				bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
//			}
//			map.setBound(bound)
//		}
//	}
//	let displayMarker =place=>{
//		mapUi()
//		let markerPosition = new kakao.maps.LatLng(37.559965,126.942345)
//		let infowindow = new kakao.maps.InfoWindow({zIndex:1})
//		let marker = new kakao.maps.Marker({
//			map : map,
//			position: markerPosition
//		})
//		kakao.maps.event.addListener(marker, 'mouseover', function(){
//			infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
//			infowindow.open(map, marker);
//		})
//	}

		
/*	let searchPlaces =x=>{
		$('#searchButton').click(e=>{
		alert(x.key)
		e.preventDefault()
		var ps = new kakao.maps.services.Places(); 
		ps.keywordSearch(x.key, placesSearchCB);
		function placesSearchCB (data, status) {
			places = data
			console.log(places)
			if (status === kakao.maps.services.Status.OK) {
				var bounds = new kakao.maps.LatLngBounds();
				for (var i=0; i<data.length; i++) {
					markerr(data[i],x.map);    
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}       
				map.setBounds(bounds);
			} 
		}
	})
	}*/

/*	let markerr = (place,map) =>{
		let infowindow = new kakao.maps.InfoWindow({zIndex:1})
		let marker = new kakao.maps.Marker({
			map: map,
			position: new kakao.maps.LatLng(place.y, place.x) 
		});
		markers.push(marker)
		kakao.maps.event.addListener(marker, 'click', function() {
			alert(place.place_name)
			infowindow.close();
		});
		kakao.maps.event.addListener(marker, 'mouseover', function() {
			infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
			infowindow.open(map, marker);
		});
		kakao.maps.event.addListener(marker, 'mouseout', function() {
			infowindow.close();
		});
		kakao.maps.event.addListener(marker, 'rightclick', function() {
			marker.setMap(null)
			infowindow.close();
		})
	}
*/
	return { onCreate }
})()