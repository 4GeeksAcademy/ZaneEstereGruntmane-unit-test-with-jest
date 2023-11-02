const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    return valueinDollar = valueInEuro * oneEuroIs['USD'];
};



const fromDollarToYen = function(valueInDollar) {
    return valueInYen = valueInDollar *  ( oneEuroIs['JPY'] / oneEuroIs['USD']); 

};


const fromYenToPound = function(valueInPound) {
    return valueInPound = valueInPound  * (oneEuroIs ['GBP'] / oneEuroIs['JPY']); 

};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } 
 

const dollars = 2; 
console.log (`${dollars} USD is equal to ${fromDollarToYen(dollars)} JPY`);
const euros = 2; 
console.log (`${euros} EUR is equal to ${fromEuroToDollar(euros)} USD`);
const yen = 2;
console.log (`${yen}JPY is equal to ${fromYenToPound(yen)} GBP`); 