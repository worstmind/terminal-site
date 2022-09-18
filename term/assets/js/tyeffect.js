var speed = 80;
var speed2 = 60;
var str = document.getElementById('str');
var i = 0;
var isRemoving = false;

var messages = [
  "life is what? ‎",
  "u lie to urself just as much as they lie to u",
  "but only u choose what u believe ‎",
  "the only truth u know in life is death", 
  "u seek all other ‎",
  "where do u find your worth ‎",
  "your motivation?",
  "when nothing matters is when u find out who u r",
  "we are all guilty ‎", 
  "we are all sinners ‎", 
  "this does not make us evil ‎",
  "we are only human ‎",
  "we can all find purpose ‎"
]

function action() {
  if (isRemoving) {
    if (str.innerText.length > 0) {
      str.innerText = str.innerText.substr(0, str.innerHTML.length - 1);
      setTimeout( action, speed2 );
      return;
    }
    isRemoving = false;
    i++;
    if (i >= messages.length) {
      i = 0;
    }
    setTimeout( action, speed );
    return;
  }
  var message = messages[i];
  str.innerText = message.substr(0, str.innerHTML.length + 1);
  if (str.innerText.length === message.length) {
    isRemoving = true;
  }
  setTimeout( action, isRemoving ? speed2 : speed );
}

setTimeout( action, speed ) ;