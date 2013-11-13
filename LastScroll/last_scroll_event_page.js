(function() {
    chrome.runtime.onInstalled.addListener(function(details) {
        window.alert('Following installation has just occured:\n\n'
        + JSON.stringify(details, null, 2) + '\n'
        + JSON.stringify(chrome.app.getDetails(), ['version'], 2) + '\n'
        + (chrome.runtime.lastError ? chrome.runtime.lastError : ''));
    });
})();