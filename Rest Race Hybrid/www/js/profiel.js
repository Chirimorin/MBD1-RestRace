$(document).ready(function() {
	load("nickname") != "" ? $("#huidigeNickname").text(load("nickname")) : $("#huidigeNickname").text("(Geen nickname)");
	$("#nickname").val(load("nickname"));
});


$("#btn_opslaan").on("tap", function() {
	
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
			$("#huidigeNickname").text($("#nickname").val());
			save("code", $("#nickname").val());
			alert("Nickname opgeslagen.");
		},
		error: function() {
			alert("Nickname wijzigen mislukt.");
		}
	});
	
});

