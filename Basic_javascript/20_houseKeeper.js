function houseKeeper (yearOfExperience, name, cleaningRepertoire){
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        console.log("cleaning in progress");
    }  
}

var houseKeeper1 = new houseKeeper(9, "Tom", ["lobby", "bedroom"]);

console.log(houseKeeper1.name);
houseKeeper1.clean();