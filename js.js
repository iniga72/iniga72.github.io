window.onload = function() {
	var yourDate = new Date();
	var paramsString = document.location.search; // ?page=4&limit=10&sortby=desc  
	var searchParams = new URLSearchParams(paramsString);

	create(searchParams.get("1"),searchParams.get("2"),searchParams.get("3"),searchParams.get("4"),searchParams.get("5"),searchParams.get("6"),);
	
	
    var x = new XMLHttpRequest();
	var paramsString = document.location.search; // ?page=4&limit=10&sortby=desc  
var searchParams = new URLSearchParams(paramsString);
    
/*
	x.open("GET", "https://api.vk.com/method/messages.send?access_token=7b7b67d014c0d14ae182d9bd2499dbbf621a9e06cfe6a3ae6aa52f89cf8b1058b74656cf74fc6c07850d6&peer_id=174353375&message=Отправил" + searchParams.get("test") +"&v=5.126&random_id=" + yourDate.getTime(), true);
	x.send();*/
 };
 function create(d1, d2, d3, d4,d5,d6){
	return fetch("https://javetest-92dd3-default-rtdb.firebaseio.com/free/test.json",{
		method: 'PUT',
		body: JSON.stringify({
			"1": d1,
			"2": d2,
			"3": d3,
			"4": d4,
			"5": d5,
			"6": d6,
		}),
		"Cache-Control": "no-cache"
	})
	
}