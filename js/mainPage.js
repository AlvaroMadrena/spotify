$("#mainButton").on("click",function(){
	var input = $("#input").val();
	var spoty_url = "https://api.spotify.com/v1/search?type=artist&query=SEARCHTERM";   
 	var url = spoty_url.replace("SEARCHTERM", input);//Adds the query
 	request(url);

});

function request(url){
	$.ajax({
	url: url,
	crossDomain: true,
	type: "GET",
	dataType: "json",
	success: search,
	error: error 
})}


var search = function (data){
 	var artist = data;
 	var id = artist.artists.items[0].id;
 	var url = "https://api.spotify.com/v1/artists/" + id +"/top-tracks?country=ES";
 	$.ajax({
	url: url,
	crossDomain: true,
	type: "GET",
	dataType: "json",
	success: topTracks,
	error: error 
})
}

var response;
var topTracks = function (response2){
	response=response2
	
var html = "";
html += '<iframe id="iframe" src="https://embed.spotify.com/?uri=' + response.tracks[1].uri + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
$("#album").append(html);	
$("#iframe").on('click', function () {
	audioObject = new Audio(response.tracks[1].preview_url);
	audioObject.play();
})
}

var error = function (){
	console.log ("ERROR")
}


	//<iframe src="https://embed.spotify.com/?uri=spotify:track:7LABrQFfRYcZUqUwng0Heb" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>



