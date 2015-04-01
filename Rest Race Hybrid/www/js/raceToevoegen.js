$(document).ready(function() {
    $("#code").val(load("code"));
});

$(window).unload(function(){
	save("code", $("#code").val());
});

$("#btn_toevoegen").on("tap", function() {
	save("code", "");
	window.location = "races.html";
});