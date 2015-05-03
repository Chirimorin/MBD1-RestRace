$(document).ready(function() {
	load("nickname") != "" ? $("#huidigeNickname").text(load("nickname")) : $("#huidigeNickname").text("<i>(Geen nickname)</i>");
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
			toonToast("Nickname opgeslagen.");
		},
		error: function() {
			toonToast("Nickname wijzigen mislukt.");
		}
	});
	
});

