$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("h1").hide();
    var pp = $("#word").val().toUpperCase(); //pp=potential palendrome
    if(!palindrome(pp)) {
      var result= "No, it is not a palindome";
    } else {
      var result= "Yes, it is a palindrome";
    }
    $("h1").text(result).fadeIn();
  });
});

//business logic

var palindrome = function(pp){
  var array = pp.split("");
  var array2 = pp.split("");
  for(var i=0; i<array.length; i++) {
    if(!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(array[i])){
      array[i]="";
      array2[i]="";
    }
  }
  array.reverse();
  var pp2 = array2.join("");
  pp = array.join("");
  if (pp2 === pp){
    return true;
  }
}
