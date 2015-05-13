restrace = "https://restrace2.herokuapp.com/";

// Slaat een object op in localstorage.
function save(name,value) {
    localStorage.setItem(name, JSON.stringify(value));
}

// Laad een object uit localstorage.
function load(name) {
    return JSON.parse(localStorage.getItem(name));
}

// Geeft de waarde van een parameter in een URL terug
function getUrlParameter(parameter){
    var URLParametersString = window.location.search.substring(1);
    var URLParametersArray = URLParametersString.split('&');
    for (var i = 0; i < URLParametersArray.length; i++) {
        var gesplitsteParameter = URLParametersArray[i].split('=');
        if (gesplitsteParameter[0] == parameter) {
            return gesplitsteParameter[1];
        }
    }
} 

// Toont kort een melding
/*function toonToast(msg){
	$("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>" + msg + "</h3></div>")
	.css({ 
		display: "block", 
		opacity: 0.90, 
		position: "fixed",
		padding: "7px",
		"text-align": "center",
		width: "270px",
		left: ($(window).width() - 284)/2,
		top: $(window).height()/2,
		"background-color": "#C5CAE9"
	})
	.appendTo( $.mobile.pageContainer ).delay( 1500 )
	.fadeOut( 400, function(){
		$(this).remove();
	});
}*/