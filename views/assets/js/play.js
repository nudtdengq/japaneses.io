

function playVid() { 
  var vid = document.getElementById("0");
  var url =  "/Debug/soundProgram/0.wav";
  document.getElementById("0").src = url;
  vid.play(); 
  
} 

function pauseVid() { 
  var vid = document.getElementById("0"); 
  vid.pause(); 
} 