const square = function (x) {
    return x * x;
}

function theSameSquare (x) {
    return x * x;
}

const squareArrow = (x) => {
    return x * x;
};

const AnotherWaySquareArrow = (x) => x * x;

console.log('square', square(3));
console.log('theSameSquare', theSameSquare(4));
console.log('SquareArrow', squareArrow(5));
console.log('AnotherWaySquareArrow', AnotherWaySquareArrow(6));

const getFirstName = (fullName) => fullName.indexOf(' ') != -1? fullName.split(' ')[0]: fullName;

console.log(getFirstName('Danilo'));