/*global chrome*/

// If your extension doesn't need a content script, just leave this file empty

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
printAllPageLinks()

window.addEventListener('mouseup', selectedText);

function selectedText() {
	let selectedText = window.getSelection().toString();
	console.log(selectedText);
	if (selectedText.length > 0) {
		let message = {
			text: selectedText
		};
		chrome.runtime.sendMessage(message);
	}
}

// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export function printAllPageLinks() {
  const allLinks = Array.from(document.querySelectorAll('a')).map(
    link => link.href
  )
}