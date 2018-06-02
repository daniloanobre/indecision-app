var nameVar = 'Danilo Assis';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'DDD';
// let nameLet = 'EEE';
console.log('nameLet', nameLet);

const nameConst = 'FFF';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Andrew Med';

if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log('First Name', firstName);
}

console.log('First Name', firstName);
