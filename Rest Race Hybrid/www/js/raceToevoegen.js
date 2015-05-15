$(document).ready(function() {
    $("#code").val(load("code"));
});

$(window).unload(function(){
	save("code", $("#code").val());
});

$("#btn_toevoegen").on("tap", function() {
	
	$.mobile.loading("show", {
		text: msgText,
		textVisible: textVisible,
		theme: theme,
		textonly: textonly,
		html: html
    });
	
	if ($("#code").val() != "") {
		$.ajax({
			type: "PUT",
			url: restrace + "races/" + $("#code").val() + "/participant?apikey=" + load("authKey"),
			headers: {
				Accept: "application/json"
			},
			dataType: "json",
			success: function(data) {
				$.mobile.loading("hide");
				
				$("#code").val("");
				window.location = "races.html";
			},
			error: function() {
				$.mobile.loading("hide");
				
				alert("Code is ongeldig.");
			}
		});
	}

});

$("#page_race_toevoegen").on("swiperight", function(event){
	history.back();
});