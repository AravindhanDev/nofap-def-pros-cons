const submit = $("#submit");

submit.click((e) => {
	e.preventDefault();
	const input = $("#input").val();
	if (input === "nofap" || input === "porn" || input === "mastrubation") {
		window.location = "https://www.nofap.com";
		$("#input").val("");
	} else if (
		input === "nonutnovember" ||
		input === "no nut november" ||
		input === "no" ||
		input === "no nut" ||
		input === "nut"
	) {
		window.location =
			"https://metro.co.uk/2018/11/14/what-is-no-nut-november-8137643/";
		$("#input").val("");
	} else if (
		input === "dark" ||
		input === "side" ||
		input === "darkside" ||
		input === "dark side"
	) {
		window.location = "https://basicideaz.com/nofap-depression/";
		$("#input").val("");
	} else if (input === "benefits" || input === "pros") {
		window.location = "https://www.healthline.com/health/nofap-benefits";
		$("#input").val("");
	} else if (
		input === "mental" ||
		input === "ment" ||
		input === "mental health" ||
		input === "mentalhealth" ||
		input === "health"
	) {
		window.location =
			"https://www.medicalnewstoday.com/articles/nofap-benefits";
		$("#input").val("");
	} else {
		window.location = "https://www.nofap.com";
		$("#input").val("");
	}
});
