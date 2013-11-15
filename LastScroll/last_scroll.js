(function() {
    var lastScrollTop = document.documentElement.scrollTop;
    //var lastStyle = window.getComputedStyle(document.body);
    var div = document.createElement('div');
    div.style.position = "absolute";
    div.style.fontSize = "xx-large";
    div.title = chrome.i18n.getMessage('extension_name') + "\n" + chrome.i18n.getMessage('extension_description');
    div.style.padding = "3px";
    div.style.borderRadius = "3px";
    //TODO I don't really want to do this, but Last Scoll is sometimes not visible in the wild,
    //div.style.zIndex = 100;
    // OK, here might be a general solution:
    function whoIsInFrontOf(div) {
        return document.elementFromPoint((div.getBoundingClientRect().right + div.getBoundingClientRect().left) / 2, (div.getBoundingClientRect().top + div.getBoundingClientRect().bottom) / 2);
    }
    div.className = "lastScroll";
    if (div.parentElement) {
        document.body.removeChild(div);
    }
    window.addEventListener('scroll', function(event) {
        if (div.parentElement) {
            document.body.removeChild(div);
        }
        div.style.left = document.documentElement.scrollLeft + window.innerWidth / 2 + "px";
        var scrollingUp = lastScrollTop > document.documentElement.scrollTop;
        if (Math.abs(lastScrollTop - document.documentElement.scrollTop) > window.innerHeight * 0.5) {
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
                div.style.top = (document.documentElement.scrollTop) + "px";
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
        lastScrollTop = document.documentElement.scrollTop;
    }, true);
})();