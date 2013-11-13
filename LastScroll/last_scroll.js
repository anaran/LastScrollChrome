(function() {
    var lastScrollTop = document.body.scrollTop;
    var lastStyle = window.getComputedStyle(document.body);
    var div = document.createElement('div');
    div.style.position = "absolute";
    div.style.background = lastStyle.color;
    div.style.color = lastStyle.backgroundColor;
    div.style.fontSize = "xx-large";
    div.title = chrome.i18n.getMessage('extension_name') + "\n" + chrome.i18n.getMessage('extension_description');
    div.style.padding = "3px";
    div.style.borderRadius = "3px";
    div.style.opacity = 0.2;
    div.className = "lastScroll";
    if (div.parentElement) {
        document.body.removeChild(div);
    }
    window.addEventListener('scroll', function(event) {
        if (div.parentElement) {
            document.body.removeChild(div);
        }
        div.style.left = document.body.scrollLeft + document.body.clientWidth / 2 + "px";
        var scrollingUp = lastScrollTop > document.body.scrollTop;
        if (Math.abs(lastScrollTop - document.body.scrollTop) > document.body.clientHeight * 0.5) {
            // TODO Please note we are scrolling by page here.
            if (scrollingUp) {
                div.innerHTML = "&DoubleUpArrow;";
                div.style.top = (lastScrollTop) + "px";
            } else {
                div.innerHTML = "&DoubleDownArrow;";
                div.style.top = (lastScrollTop + document.body.clientHeight) + "px";
            }
        } else {
            // TODO Please note we are scrolling by line here.
            if (scrollingUp) {
                div.innerHTML = "&UpArrow;";
                div.style.top = (document.body.scrollTop) + "px";
            } else {
                div.innerHTML = "&DownArrow;";
                div.style.top = (document.body.scrollTop) + "px";
            }

        }
        document.body.appendChild(div);
        //         window.scrollTo(div.getBoundingClientRect().left, div.getBoundingClientRect().top);
        //        console.log(JSON.stringify(document.body, [
        //            'clientHeight', 'clientLeft', 'clientTop', 'clientWidth',
        //            'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth'], 2));
        lastScrollTop = document.body.scrollTop;
    }, true);
})();