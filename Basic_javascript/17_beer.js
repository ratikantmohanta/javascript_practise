

function beer() {

    var numberOfBottles = 99;
    while (numberOfBottles>0) {
        console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take 1 down, pass it around, " + (numberOfBottles-1) + " bottles of beer on the wall.");
        
        if(numberOfBottles == 1){
            console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take 1 down, pass it around, no more bottles of beer on the wall.");
        }
        
        numberOfBottles--;
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to store and buy some more, 99 bottles of beer on the wall.");

}

beer();