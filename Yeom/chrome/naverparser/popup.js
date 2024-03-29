// Inject the payload.js script into the current tab after the popout has loaded
chrome.downloads.download({url: "www.naver.com", filename: "hello.txt"});

window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('content').innerHTML = message;
});