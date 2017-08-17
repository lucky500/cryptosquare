//Business Logic
var sentenceArray; // remember to move into function later.
var inputValue;
var col;
var outerArray = [];
function cryptoSquare(input){
  if(!isNaN(input)){
    alert("Please enter a sentence!");
  } else {
    inputValue = inputValue.toLowerCase();
    inputValue = inputValue.replace(/[\s\W]/g, "");
    sentenceArray = inputValue.split("");
    var col = getCol(sentenceArray);
    while (sentenceArray.length > 0){
      outerArray.push(sentenceArray.splice(0, col));
    }
    console.log(outerArray);
    return sentenceArray;
  }
}

function getCol(array){
   var arrayLength = array.length;
   col =  Math.ceil(Math.sqrt(arrayLength));
   return col;
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
