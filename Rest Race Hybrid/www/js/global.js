restrace = "https://restrace2.herokuapp.com/";

document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#page_inloggen') || $.mobile.activePage.is('#page_races')){
        navigator.app.exitApp();
    }
    else {
        navigator.app.backHistory();
    }
}, false);

// Slaat een object op in localstorage.
function save(name,value) {
    localStorage.setItem(name, JSON.stringify(value));
}

// Laad een object uit localstorage.
function load(name) {
    return JSON.parse(localStorage.getItem(name));
}

// Get path
function getPhoneGapPath() {
    var path = window.location.pathname;
    path = path.substr(path, path.length - 10);
    return 'file://' + path;
};

// Voor loading spinner
var $this = $(this),
	theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
	msgText = $this.jqmData("msgtext") || $.mobile.loader.prototype.options.text,
	textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
	textonly = !!$this.jqmData("textonly");
	html = $this.jqmData("html") || "";
	
