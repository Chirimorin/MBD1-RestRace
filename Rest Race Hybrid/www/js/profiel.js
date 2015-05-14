$(document).ready(function() {
	
});

$(document).on("pagebeforeshow", function( event ) { 
	load("nickname") != "" ? $("#huidigeNickname").text(load("nickname")) : $("#huidigeNickname").text("(Geen nickname)");
	$("#nickname").val(load("nickname"));
});


$("#btn_opslaan").on("tap", function() {
	
	$.mobile.loading("show", {
		text: msgText,
		textVisible: textVisible,
		theme: theme,
		textonly: textonly,
		html: html
    });
	
	$.ajax({
		type: "PUT",
		url: restrace + "users/nickname?apikey=" + load("authKey"),
		headers: {
			Accept: "application/json"
		},
		data: {
			"nickname": $("#nickname").val()
		},
		dataType: "json",
		success: function(data) {
			$.mobile.loading("hide");
			
			$("#huidigeNickname").text($("#nickname").val());
			save("nickname", $("#nickname").val());
			alert("Nickname opgeslagen.");
		},
		error: function() {
			$.mobile.loading("hide");
			
			alert("Nickname wijzigen mislukt.");
		}
	});
	
});

