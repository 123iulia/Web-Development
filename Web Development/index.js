
function HouseKeeper(yearOfExperience, name, cleaningRepertoire) {
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("cleaning in progress...");
    }
}

 var houseKeeper1 = new HouseKeeper("Tom", 9, ["lobby", "bedroom"]);

console.log(houseKeeper1);

