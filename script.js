var textarea = $('.term');
var speed = 150; 
var text = 'node starboy.js';

var i = 0;

runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.append("<br>")
        i = 0;
        setTimeout(function() {feedbacker();}, 2000);
      }
    }, Math.floor(Math.random() * 220) + 5);
}


var count = 5;
var time = 1;
function feedbacker() {
  textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
  if (time % 80 == 0) {
    i++;
    textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 500) + 500;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 1)
        feedbacker();
      else {
        textarea.append("<br>connecting...<br>");
        window.location.href="./term";
      }
    },time);
}

var output = ["- connecting...",
              "- establishing connection...",
              "- connecting...",
              "- connected to bloodsucker.cc", 
              "- loading user info...",
              "- WAIT..",
              ""
];




