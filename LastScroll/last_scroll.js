(function() {
    var lastScrollTop = document.body.scrollTop;
    var lastStyle = window.getComputedStyle(document.body);
    var div = document.createElement('div');
    div.style.position = "absolute";
    div.style.fontSize = "xx-large";
    div.title = chrome.i18n.getMessage('extension_name') + "\n" + chrome.i18n.getMessage('extension_description');
    div.style.padding = "3px";
    div.style.borderRadius = "3px";
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
        //window.scrollTo(div.getBoundingClientRect().left, div.getBoundingClientRect().top);
        //console.log(JSON.stringify(document.body, [
        //    'clientHeight', 'clientLeft', 'clientTop', 'clientWidth',
        //    'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth'], 2));
        lastScrollTop = document.body.scrollTop;
    }, true);
})();