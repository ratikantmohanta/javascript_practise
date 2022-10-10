function leapYear(y) {

    if (y % 4 === 0 && y % 100 !== 0) {
        console.log("leap");
    }
    else if (y % 400 === 0) {
        console.log("leap");
    }
    else {
        console.log("not leap");
    }
}


leapYear(2004);