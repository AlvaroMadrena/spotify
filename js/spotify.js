$("#button").on("click", function(e){
	e.preventDefault();
	var email =  $("#exampleInputEmail3").val();
	var password = $("#exampleInputPassword3").val();
	var jsonP = {}
	jsonP [email] = password
	window.localStorage.setItem("memoria",JSON.stringify(jsonP));
	$("#exampleInputEmail3").val('');
	$("#exampleInputPassword3").val('');
	window.open('file:///C:/Users/Alvaro/Documents/PROGRAMA_GENERATION_SEVILLA_2016/EJERCICIOS_SEMANA_10/SPOTIFY/mainPage.html','_self')
});



