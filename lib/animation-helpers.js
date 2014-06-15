//animation-helpers

/* Request Animation Frame SHIM */
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


/* Deal with animation event prefixes */

    /*
	Function PrefixedEvent
	@PARAM element - the html element to obesrve
	@PARAM type - the animation event to listen to
	@PARAM callback - the function to execute on event
    PrefixedEvent(el, 'AnimationEnd', function() {
        console.log("Animation End");
        el.classList.remove('transition');
    });

	*/

var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}