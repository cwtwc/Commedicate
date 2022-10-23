// If your extension doesn't need a background script, just leave this file empty

/*global chrome*/
 
chrome.runtime.onMessage.addListener(receiver);

window.word = "Highlight a medical term to use Commedicate!";

function receiver(request, sender, sendResponse) {
	window.word = request.text;
	console.log(window.word);
}