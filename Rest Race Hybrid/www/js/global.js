$(document).on("mobileinit", function() {
	$.mobile.defaultPageTransition = 'slide';
});

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