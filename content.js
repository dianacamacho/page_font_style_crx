// send message to event page js to highlight the extension icon, since content script cant access the chrom api itself
chrome.runtime.sendMessage({todo: "showPageAction"});