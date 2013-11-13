(function() {
    // TODO See http://developer.chrome.com/extensions/runtime.html#event-onInstalled
    chrome.runtime.onInstalled.addListener(function(details) {
        switch (details.reason) {
            case "install":
                window.alert(Date() + '\n\nWelcome to this new ' + details.reason + ' of version ' + chrome.app.getDetails().version + '\n' + (chrome.runtime.lastError ? chrome.runtime.lastError : ''));
                break;
            case "update":
                window.alert(Date() + '\n\nWe got an ' + details.reason + ' from version ' + details.previousVersion + ' to ' + chrome.app.getDetails().version + '\n' + (chrome.runtime.lastError ? chrome.runtime.lastError : ''));
                break;
            case "chrome_update":
                window.alert(Date() + '\n\nWe witnessed a ' + details.reason + ' to version ' + navigator.userAgent + '\n' + (chrome.runtime.lastError ? chrome.runtime.lastError : ''));
                break;
        }
        //window.alert('Following installation has just occured:\n\n' + JSON.stringify(details, null, 2) + '\n' + JSON.stringify(chrome.app.getDetails(), ['version'], 2) + '\n' + (chrome.runtime.lastError ? chrome.runtime.lastError : ''));
    });
})();
//Sample alert content in M33. The alert title is not part of the content copied by Ctrl+A Ctrl+C
//We got an update from version 3 to 4
//Welcome to this new install of version 4
//We witnessed a chrome_update to version Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1708.0 Safari/537.36
//We got an update from version 4 to 4
//Following installation has just occured:{  "previousVersion": "4",  "reason": "update"}{  "version": "4"}