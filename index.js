function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function logShout(string) {
  console.log(string.toUpperCase())
}

  var uppercase = "HELLO!"
  var lowercase = "hello!"
  var mixedCase = "Hi there!"
  
function sayHiToGrandma(string) {
  
  if (string === lowercase) {
    return "I can\'t hear you!"
  }
}

shout("Hello!")
whisper("Hello!");
logShout("Hello!");
logWhisper("Hello!");
sayHiToGrandma("hello")