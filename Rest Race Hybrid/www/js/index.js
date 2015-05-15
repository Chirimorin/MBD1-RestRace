$(document).on("pagebeforecreate", function(){
	
	if (load("authKey") !== null && load("authKey") != "") {
		window.location = "#page_races";
	}

});
