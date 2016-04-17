//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
var message = "";
function stripXtraCharacters(str) {
  str=str.split("");
  for(i=0;i<=str.length;i++) {
    //eliminate spaces
    if (str[i]===" ") {
      str[i]="";
    }
    //eliminate punctuation
    if (str[i]==="." || str[i]==="?" || str[i]==="," || str[i]==="!" || str[i]===";" || str[i]===":" || str[i]==="-" || str[i]==="'") {
      str[i]="";
    }
  }
  return str.join("");
}

function palindrome(palindrome) {
  palindrome=stripXtraCharacters(palindrome);

  var halfSize=parseInt(palindrome.length/2)
  var firstHalf=palindrome.substring(0,halfSize);
  var secondHalf=palindrome.substring(palindrome.length-halfSize, palindrome.length).split("");
  secondHalf.reverse();
  secondHalf=secondHalf.join("");

  if(firstHalf.toUpperCase()===secondHalf.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

$("#testPhrase").submit(function(event) {
  event.preventDefault();
  if(palindrome($("#myPalindrome").val())) {
    message = "Yes, you have a palindrome!";
    $("#myPalindromes").append("<li>" + $("#myPalindrome").val() + "</li>");
  } else {
    message = "Oops! That's not a palindrome, try again.";
  }

  $("#results").text(message);

});
