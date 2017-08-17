//Business Logic
var sentenceArray; // remember to move into function later.
var inputValue;
var rows;
var columns;
function cryptoSquare(input){
  if(!isNaN(input)){
    alert("Please enter a sentence!");
  } else {
    inputValue = inputValue.toLowerCase();
    inputValue = inputValue.replace(/[\s\W]/g, "");
    sentenceArray = inputValue.split("");
    var square = findClosestSquare(sentenceArray);
    return sentenceArray;
  }
}

function findClosestSquare(array){
   var arrayLength = array.length;
   rows = Math.ceil(Math.sqrt(arrayLength));
   columns =  Math.ceil(Math.sqrt(arrayLength));
   console.log('rows:', rows);
   console.log('columns:', columns);
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
