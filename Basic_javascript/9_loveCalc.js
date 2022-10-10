prompt("What is your Name");
prompt("What is your lovers Name");

//any number between 0 - 0.9999999999999999
var loveScore = Math.random();
loveScore *= 100;
loveScore = Math.floor(loveScore) + 1;
//n = Math.ceil(loveScore); 
if (loveScore > 70) {
    alert("Your Love Score is " + loveScore + "% You Love each other like Kanye loves Kanye.");
}
else if(loveScore > 30 && loveScore <= 70){
    alert("Your Love Score is " + loveScore + "%");
}
else {
    alert("Your Love Score is " + loveScore + "% You go together like oil and water.");
}

