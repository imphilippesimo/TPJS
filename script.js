/* 
* Define Variables
* Calculate the document height and set the offset to a quarter of that value
* add event listeners for scroll ans click
*/
var btt = document.getElementById("back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight;
isFirefox = navigator.userAgent.toLowerCase().lastIndexOf("firefox") > -1;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != undefined) {
    offset = docHeight / 8;
}

//add scroll event listener
window.addEventListener('scroll', function (event) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = (scrollPos > offset) ? "visible" : "";

});

//add event listener
btt.addEventListener("click", function (event) {
    event.preventDefault();
    if (isFirefox) {
        docElem.scrollTop = 0;
    } else {
        body.scrollTop = 0;
    }

})