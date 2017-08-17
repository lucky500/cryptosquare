//Business Logic
var sentenceArray; // remember to move into function later.
var inputValue;
function cryptoSquare(input){
  if(!isNaN(input)){
    alert("Please enter a sentence!");
  } else {
    inputValue = inputValue.toLowerCase();
    return sentenceArray = inputValue.split("");
  }
}

//interface Logic
$(document).ready(function(){
  $('form#sentence-form').submit(function(e){
    e.preventDefault();
    inputValue = $('input#sentence').val();
    console.log(inputValue);
    console.log(cryptoSquare(inputValue));
  });
});
