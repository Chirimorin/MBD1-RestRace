restrace = "https://restrace2.herokuapp.com/";

// Voor loading spinner
var $this = $(this),
	theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
	msgText = $this.jqmData("msgtext") || $.mobile.loader.prototype.options.text,
	textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
	textonly = !!$this.jqmData("textonly");
	html = $this.jqmData("html") || "";

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
