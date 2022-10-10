var myTweet = prompt("Compose your tweet?");
var tweetLength = myTweet.length;

alert("you have written " + tweetLength + " character, you have " + (140 - tweetLength) + " character remaining.");

alert( myTweet.slice(0,140));;

