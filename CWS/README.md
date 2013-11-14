Last Scroll Publishing in Chrome Web Store
====
These are developer instructions, users don't need to know about this.

[Last Scroll - Overview](https://chrome.google.com/webstore/detail/last-scroll/mceojjfcjklcpbdkagkjhoinaagcidnd) is all there is to know about this mini extension.

Publishing
----
Go to https://chrome.google.com/webstore/developer/edit/mceojjfcjklcpbdkagkjhoinaagcidnd to edit this extension in the CWS developer dashboard.

Export folder `LastScroll` from [LastScrollChrome](..) as ZIP file (in *eclipse orion* use `Actions`->`Export as zip`) and use this to `Upload Updated Package`.

English Description
----
```
When scrolling web pages it is often difficult to find the last
previously visible line to keep on reading.

This is most apparent when a scroll has less than a full page to go at the top or bottom of a document.

*Last Scroll* provides a visual hint where to keep on reading, and how we got here.
```
German Description
----
```
Beim Rollen von Internet Seiten ist es oft schwer die letzte zuvor sichtbare Zeile zu finden um zügig
weiter zu lesen.

Das wird besonders augenscheinlich wenn das Rollen zum Anfang oder Ende eines Dokuments keine
ganze Seite mehr vorfindet.

*Last Scroll* gibt einen sichtbaren Hinweis zum weiterlesen und wie wir hierher gelangten.
```
Icon
----
Save and upload ![][icon] or whatever is found in [../LastScroll/manifest.json](../LastScroll/manifest.json).

[icon]: ../LastScroll/lastscroll4_128x128.png "../LastScroll/lastscroll4_128x128.png"

Screenshots
----
These are created using http://en.wikipedia.org/wiki/Scrolling and sizing chrome to 640x400.

`Inspect element` is useful to display the size while adjusting the chrome window.

Use e.g. the `Capture Visible Tab` feature of Chrome extension `Autosave Text` to create a PNG image of the page and save it with `Ctrl`+`S`.

The screenshots are all [here](.).

