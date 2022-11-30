var nameVar = 'Mohammad';
var nameVar = 'Taghi';
console.log('nameVar' , nameVar);

let nameLet = 'Jen'
nameLet = 'July';
console.log('namLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

//Block scoping

const fullName = 'Mohammad Mir';
let firstname;

if(fullName) {
    firstname = fullName.split(' ')[0];
    console.log(firstname);
}

console.log(firstname);