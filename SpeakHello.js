

(function (window) {
	var helloSpeaker = new Object();
	helloSpeaker.names="Ihtesham", "Ahsan", "Ameen", "Ali", "Noor", "Husnain", "Wasim", "Jamshed", "Mustafa"
	var speakWord="hello"
	
	helloSpeaker.speak= function (name) {
       console.log(speakWord + " " + name);
}

window.helloSpeaker= helloSpeaker

})(window);