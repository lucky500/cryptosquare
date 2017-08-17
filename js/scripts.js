//Business Logic
function cryptoSquare(input){
  if(input != String){
    alert("Please enter a sentence!");
  }
}

//interface Logic
$(document).ready(function(){
  $('form#sentence-form').submit(function(e){
    e.preventDefault();
    var inputValue = $('input#sentence').val();
    console.log(inputValue);
    console.log(cryptoSquare(inputValue));
  });
});
