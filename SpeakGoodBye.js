

(function (window) {
	var byeSpeaker= new Object();
	byeSpeaker.names="Ihtesham", "Ahsan", "Ameen", "Ali", "Noor", "Husnain", "Wasim", "Jamshed", "Mustafa"
	var speakWord="goodbye"
	

	byeSpeaker.speak= function (name) {
        console.log(speakWord + " " + name);
    }

window.byeSpeaker= byeSpeaker

})(window);