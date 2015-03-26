$("#page_waypoint").on("pageshow", onPageShow);

function onPageShow(e,data) {
	$("#naam").text("Waypoint " + getUrlParameter("id"));
	$("#omschrijving").append("<p>Omschrijving van het waypoint met het id: " + getUrlParameter("id") + "</p>");
}