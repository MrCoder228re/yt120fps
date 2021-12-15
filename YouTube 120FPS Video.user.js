// ==UserScript==
// @name         YouTube 120FPS Video
// @namespace    https://github.com/MrCoder228re/yt120fps
// @version      0.2
// @updateURL    /helper.meta.js
// @downloadURL  /helper.user.js
// @description  120FPS video on YouTube!
// @author       DiopinYT
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

var a = document.body.innerHTML;
if (a.search('.-vf120-.') > -1)
{
    console.log("[YouTube 120FPS Video]: Found!");
    // edit video speed
    document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 2.0;
    // edit video name
    var vtitle = document.getElementsByClassName("style-scope ytd-video-primary-info-renderer")[6].innerHTML;
    var vtitle1 = vtitle.replace('.-vf120-.', '');
    document.getElementsByClassName("style-scope ytd-video-primary-info-renderer")[6].innerHTML = vtitle1;
    // edit title page
    var title = document.title;
    var title1 = title.replace('.-vf120-.', '');
    document.title = title1;
}
else {
    console.log("[YouTube 120FPS Video]: Not Found!");
}
