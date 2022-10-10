

function beer() {

    var i = 99;
    while (i>0) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take 1 down, pass it around, " + (i-1) + " bottles of beer on the wall.");
        i--;
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to store and buy some more, 99 bottles of beer on the wall.");

}

beer();