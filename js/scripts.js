//Business Logic
var sentenceArray; // remember to move into function later.
var inputValue;
var col;
var outerArray = [];
finalArray = [];
var string = '';
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
    console.log('outerArray out:', outerArray);
    outerArray.forEach(function(currentValue, index){
      console.log('outer array out here:', outerArray[index][1]);
      console.log('test of finalArray: ', finalArray.push([index][currentValue]));
        for(var i=0; i <= 1; i++){
          if(outerArray[index][i] === i){
            finalArray.push([outerArray[index][i]]);
          }
        console.log('check1:', outerArray[index][i]);
        console.log('did it work? ', finalArray);
        // if(outerArray[index] === outerArray[index][i]){
        // finalArray.push(outerArray[i][i]);
        // console.log('here is final array:', finalArray);
      }
    });
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
    console.log(cryptoSquare(inputValue));
  });
});
