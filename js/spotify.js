

var email;
var password;


$("#button").on("click", function(e){
	e.preventDefault();
	email =  $("#exampleInputEmail3").val();
	password = $("#exampleInputPassword3").val();	
	//var jsonP = {}
	// jsonP [email] = password
	window.localStorage.setItem(email, password);
	$("#exampleInputEmail3").val('');
	$("#exampleInputPassword3").val('');
	$.ajax({
		url: "js/spotify.jsonp", 
		jsonpCallback: "dataUsers",
		crossDomain: true,
		type: "GET",
		dataType: "jsonp",
		success: logIn,
		error: error 
	})
	// window.open('file:///C:/Users/Alvaro/Documents/PROGRAMA_GENERATION_SEVILLA_2016/EJERCICIOS_SEMANA_10/SPOTIFY/mainPage.html','_self')
});
var response;
var logIn = function (data){
response = data.users
for (i=0;i<response.length;i++) {
	var name = response[i].name;
	var pass = response[i].password;
	if (email === name && password === pass){
		window.location.href = 'file:///C:/Users/Alvaro/Documents/PROGRAMA_GENERATION_SEVILLA_2016/EJERCICIOS_SEMANA_10/SPOTIFY/mainPage.html'
	}
}
}

var error = function (){
	console.log ("ERROR")
}