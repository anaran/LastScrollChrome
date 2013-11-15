(function() {
    // TODO See http://developer.chrome.com/extensions/runtime.html#event-onInstalled
    chrome.runtime.onInstalled.addListener(function(details) {
        try {
            switch (details.reason) {
                case "install":
                    window.alert(chrome.i18n.getMessage('alert_install', [
                    Date(), details.reason, chrome.app.getDetails().name, chrome.app.getDetails().version, (chrome.runtime.lastError ? chrome.runtime.lastError : '')]));
                    break;
                case "update":
                    window.alert(chrome.i18n.getMessage('alert_update', [
                    Date(), chrome.app.getDetails().name, details.reason, details.previousVersion, chrome.app.getDetails().version, (chrome.runtime.lastError ? chrome.runtime.lastError : '')]));
                    break;
                case "chrome_update":
                    window.alert(chrome.i18n.getMessage('alert_chrome_update', [
                    Date(), chrome.app.getDetails().name, details.reason, navigator.userAgent, (chrome.runtime.lastError ? chrome.runtime.lastError : '')]));
                    break;
            }
        } catch (exception) {
            if (window.confirm('An exception has occured in extension ' + chrome.app.getDetails().name + '\n\nSubmit this issue at https://github.com/anaran/LastScrollChrome/issues now?')) {
                window.prompt('Please copy the string below, as is, into the new issue after you supply title and comments.', JSON.stringify(exception.stack));
                window.open('https://github.com/anaran/LastScrollChrome/issues/new', '_blank');
            }
        }
    });
})();
//Sample alert content in M33. The alert title is not part of the content copied by Ctrl+A Ctrl+C
//Wed Nov 13 2013 23:29:19 GMT+0100 (Westeuropäische Normalzeit)We got an update from version 4 to 5
//We got an update from version 3 to 4
//Welcome to this new install of version 4
//We witnessed a chrome_update to version Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1708.0 Safari/537.36
//We got an update from version 4 to 4
//Following installation has just occured:{  "previousVersion": "4",  "reason": "update"}{  "version": "4"}