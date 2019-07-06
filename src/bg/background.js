function reset (){

	chrome.browserAction.setIcon({path : "../../icons/tx-g.png"});

	chrome.storage.local.clear(function () {
		console.log("Events reset");
	});
}

reset();

var api_server = "http://127.0.0.1:8000/";

chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {

	var url = details.url;
	reset();

	if (url.includes("https://www.trulia.com/")) {

        // after get url, first should return if it is a sold or rental
        // this part will be filled in later.
        // focus on just having for-sale houses

		var req_url = api_server + "for_sale/?weblink=" + url;

        // sample code check return of 0/1, then proceed.
		fetch(req_url)
		.then(r => r.text())
		.then(function(result) {
			result_json = JSON.parse(result);
            // check if input is validate
			if (result_json.log) {
				chrome.storage.local.set({prediction: result_json.prediction}, function() {
					console.log("Found address");
					chrome.browserAction.setIcon({path : "../../icons/tx.png"});
        		});
			}
		});
	}
});
