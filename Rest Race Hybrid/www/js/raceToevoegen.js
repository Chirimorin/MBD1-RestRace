$(document).ready(function() {
    $("#code").val(load("code"));
});

$(window).unload(function(){
	save("code", $("#code").val());
});

$("#btn_toevoegen").on("tap", function() {
	
	if ($("#code").val() != "") {
		$.ajax({
			type: "PUT",
			url: restrace + "races/" + $("#code").val() + "/participant?apikey=" + load("authKey"),
			headers: {
				Accept: "application/json"
			},
			dataType: "json",
			success: function(data) {
				$("#code").val("");
				window.location = "races.html";
			},
			error: function() {
				alert("Code is ongeldig.");
			}
		});
	}

});