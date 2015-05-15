$(document).on("pagebeforecreate", function(){
	
	if (load("authKey") !== null && load("authKey") != "") {
		$.mobile.changePage("#page_races", {transition: "none"});
	}

});
