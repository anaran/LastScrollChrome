(function() {
    var loading = "loading started at " + new Error().stack.split(/\s+/)[2] + "\n(" + (chrome.app.getDetails() && chrome.app.getDetails().name || "no chrome.app.getDetails()") + ") takes";
    console.time(loading);
    //TODO Place following code where timed section should end.
    //console.timeEnd(loading);
    //console.log("Reload it with Ctrl+R or as follows:\nlocation.reload(true)");
    //console.log("injection into " + document.URL + " in\n" + JSON.stringify(navigator.userAgent) + "\nends at\n" + JSON.stringify(Date()));
    document.addEventListener('readystatechange', function(event) {
        if (event.target.readyState !== "complete") {
            return;
        }
        var lastScrollTop = document.body.scrollTop;
        //var lastStyle = window.getComputedStyle(document.body);
        var div = document.createElement('div');
        div.style.position = "absolute";
        div.style.fontSize = "xx-large";
        div.title = chrome.i18n.getMessage('extension_name') + "\n" + chrome.i18n.getMessage('extension_description');
        div.style.padding = "3px";
        div.style.borderRadius = "3px";
        // OK, here might be a general solution:
        function whoIsInFrontOf(element) {
            return document.elementFromPoint((element.getBoundingClientRect().right + element.getBoundingClientRect().left) / 2, (element.getBoundingClientRect().top + element.getBoundingClientRect().bottom) / 2);
        }
        div.className = "lastScroll";
        if (div.parentElement) {
            document.body.removeChild(div);
        }
        window.addEventListener('scroll', function(event) {
            if (div.parentElement) {
                document.body.removeChild(div);
            }
            div.style.left = document.body.scrollLeft + window.innerWidth / 2 + "px";
            var scrollingUp = lastScrollTop > document.body.scrollTop;
            if (Math.abs(lastScrollTop - document.body.scrollTop) > window.innerHeight * 0.5) {
                // TODO Please note we are scrolling by page here.
                if (scrollingUp) {
                    div.innerHTML = "&DoubleUpArrow;";
                    div.style.top = (lastScrollTop) + "px";
                } else {
                    div.innerHTML = "&DoubleDownArrow;";
                    div.style.top = (lastScrollTop + window.innerHeight) + "px";
                }
            } else {
                // TODO Please note we are scrolling by line here.
                if (scrollingUp) {
                    div.innerHTML = "&Uarr;";
                    div.style.top = (document.body.scrollTop) + "px";
                } else {
                    div.innerHTML = "&Darr;";
                    div.style.top = (lastScrollTop + window.innerHeight) + "px";
                }
            }
            document.body.appendChild(div);
            // I ever get numeric zIndex, so I have to succumb to try getting in front iteratively.
            // var otherZindex = Number(window.getComputedStyle(who).zIndex);
            for (var zIndex = 1, who = whoIsInFrontOf(div); who && who !== div && zIndex <= 10000; zIndex *= 10) {
                console.info('increasing z-index to ', zIndex, ' trying to get in front of ', who);
                div.style.zIndex = zIndex;
                who = whoIsInFrontOf(div);
            }
            //window.scrollTo(div.getBoundingClientRect().left, div.getBoundingClientRect().top);
            //console.log(JSON.stringify(document.body, [
            //    'clientHeight', 'clientLeft', 'clientTop', 'clientWidth',
            //    'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth'], 2));
            lastScrollTop = document.body.scrollTop;
        }, true);
    }, false);
    console.timeEnd(loading);
    console.log("Reload it with Ctrl+R or as follows:\nlocation.reload(true)");
    console.log("injection into " + document.URL + " in\n" + JSON.stringify(navigator.userAgent) + "\nends at\n" + JSON.stringify(Date()));
})();