const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Import the function from app.js
    const {fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(2);

    // If 1 euro is 1.07 dollars, then 2 euros should be (2 * 1.07)
    const expected = 2 * 1.07; 
    
    // This is the comparison for the unit test
    expect(fromEuroToDollar(2)).toBe(2.14); // 1 euro is 1.07 dollars, then 2 euros should be = (2 * 1.07)
})

test("One dollar should be 146.26168224299064 yen", function() {

    // Import the function from app.js
    const {fromDollarToYen} = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(2);
    
    // If 1 euro is 1.07 dollars and 1 euro is 156.5 Yen, then 2 Yen should be  (2 * ( oneEuroIs['JPY']/ oneEuroIs['USD']))  
    const expected =  2 *  156.5 / 1.07;
    
    // This is the comparison for the unit test
    expect(fromDollarToYen(2)).toBe(292.5233644859813); // 2 dollar should be 292.5233644859813 yens 
})

test("One Yen should be 0.005559105431309904 pounds", function() {

    // Import the function from app.js
    const {fromYenToPound } = require('./app.js');


    // Use the function like its supposed to be used
    const pounds = fromYenToPound (2);

    // If 1 euro is 0.87 pounds and 1 euro is 156.5 yen, 2 yen should be 0.011118210862619809 pounds 
    const expected =  2 * 0.87/ 156.5; 
    
    // This is the comparison for the unit test
    expect(fromYenToPound(2)).toBe(0.011118210862619809); // 2 yen should be 0.011118210862619809 pounds
}); 
