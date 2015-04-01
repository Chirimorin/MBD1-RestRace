$("#btn_registreren").on("tap", function() {
	
	$.ajax({
		type: "POST",
		url: restrace + "signup",
		data: {
			email: $("#emailadres").val(),
			password: $("#wachtwoord1").val()
		},
		success: function(data) {
			console.log(data);
		}
	});
	
	//window.location = "index.html";
})