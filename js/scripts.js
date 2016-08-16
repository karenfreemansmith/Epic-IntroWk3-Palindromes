$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var pp = $("#word").val().toUpperCase(); //pp=potential palendrome
    if(!palindrome(pp)) {
      var result= "No, it is not a palindome";
    } else {
      var result= "Yes, it is a palindrome";
    }
    $("h1").text(result);
  });
});

//business logic

var palindrome = function(pp){
  var array = pp.split("");
  var array2 = array.reverse();
  var pp2 = array2.join("");
  if (pp2 === pp){
    return true;
  }
}
