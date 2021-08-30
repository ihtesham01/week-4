
(function() {

var names = ["Ihtesham", "Ahsan", "Ameen", "Ali", "Noor", "Husnain", "Wasim", "Jamshed", "Mustafa"];


for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
