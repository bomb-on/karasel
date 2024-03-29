// async loader for fonts
// https://github.com/typekit/webfontloader

Meteor.startup(function() {

    WebFontConfig = {
        google: { families: [ 'BenchNine:700' ] }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
        console.log("async fonts loaded", WebFontConfig);
    })();

})