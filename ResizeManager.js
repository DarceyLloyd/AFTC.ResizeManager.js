/**
 * Author: Darcey@AllForTheCode.co.uk
 * Date: 07/2016
 * Version: 1.0
 * Usage examples: See bottom of this file
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
if (!log){
	function log(arg){
		if (console){
			console.log(arg);
		}
	}
}
if (!Function){
	function getFunctionName(callback){
		var name = callback.toString();
		var reg = /function ([^\(]*)/;
		return reg.exec(name)[1];
	}
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function ResizeManagerVO(){
	this.name = "";
	this.resizeFunction = {};
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var ResizeManager = (function(){
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	var events = [];
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function constructor(){
		window.addEventListener("resize", resizeHandler);
		$(window).on("orientationchange", function () {
			//log("ResizeManager.orientationchange detected");
			// Delay as orientation change takes time on some devices
			setTimeout(function () {
				resizeHandler();
			}, 500);
		});
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function resizeHandler(){
	    //log("ResizeManager.resizeHandler()");
		for (var i = 0; i < events.length; i++) {
			events[i].resizeFunction();
		}
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	
	// Run constructor
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	constructor();
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	return {
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		add:function(eventName, dispatchFunction){
			// Check event exists
			var eventExists = false;
			var foundOnIndex = -1;
			for (var i = 0; i < events.length; i++) {
				if (events[i].name === eventName){
					foundOnIndex = i;
					eventExists = true;
					break;
				}
			}
			
			if (!eventExists){
				var vo = new ResizeManagerVO();
				vo.name = eventName;
				vo.resizeFunction = dispatchFunction;
				events.push(vo);
			} else {
				// Don't add duplicate (single function single event name)
				log("ResizeManager.add: Resize [" + eventName + "] already exists [" + getFunctionName(dispatchFunction) + "]");
			}
		},
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		remove:function(eventName){
			// Check event exists
			var found = false;
			for (var i = 0; i < events.length; i++) {
				if (events[i].name === eventName){
					found = true;
					events[i] = null;
					events.splice(i, 1);
					break;
				}
			}
			
			if (!found){
				log("ResizeManager.remove: Cannot remove resize event [" + eventName + "] as it doesn't exist!");
			}
		},
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		dispatch:function(eventName){
			//log("dispatch("+eventName+")");
			var eventExists = false;
			for (var i = 0; i < events.length; i++) {
				if (events[i].name === eventName){
					eventExists = true;
					events[i].resizeFunction();
					break;
				}
			}
			if (!eventExists){
				log("ResizeManager.dispatch: Resize event [" + eventName + "] doesn't exist!");
				return false;
			}
		},
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		removeAll:function(){
			events = null;
			events = [];
		}
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	};
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
})();
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

