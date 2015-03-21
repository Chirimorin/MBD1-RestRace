$("#page_race").on("pageshow", onPageShow);

function onPageShow(e,data) {
	$("#titel").text("Race " + getUrlParameter("id"));
}
		