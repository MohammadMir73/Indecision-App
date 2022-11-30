const add = (a,b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

const user = {
    name: "Ali",
    cities: ['Yazd', 'Tehran', 'Qom'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//challange
const multiplier = {
    Numbers: [10,20,30,40],
    multiplyBy: 10,
    multiply() {
        return this.Numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());
