//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
var message = "";

function palindrome(palindrome) {
  var halfSize=parseInt(palindrome.length/2)
  var firstHalf=palindrome.substring(0,halfSize);
  var secondHalf=palindrome.substring(palindrome.length-halfSize, palindrome.length).split("");
  secondHalf.reverse();
  secondHalf=secondHalf.join("");

  if(firstHalf===secondHalf) {
    return true;
  } else {
    return false;
  }
}

$("#testPhrase").submit(function(event) {
  event.preventDefault();
  if(palindrome($("#myPalindrome").val())) {
    message = "Yes, you have a palindrome!";
  } else {
    message = "Oops! That's not a palindrome, try again.";
  }

  $("#results").text(message);
});
