function leapYear(y) {

    if (y % 4 === 0) {
        if (y % 100 === 0) {
            if (y % 400 === 0) {
                console.log("leap");
            }
            else {
                console.log("not leap");
            }
        }
        else {
            console.log("leap");
        }
    }
    else {
        console.log("not leap");
    }
}

leapYear(2020);