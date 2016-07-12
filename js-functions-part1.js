
function test(str) {
  return "test" + str
}

function sum( num1, num2 ) {
    return (num1 + num2);
}

function isEqual(num1, num2) {
    return (num1 === num2);
}

function validDiscount( discount ) {
    if ( discount > 100 || discount < 0 ) {
        console.log('Warning: Discount is greater than 100% or less than > 0');
        return false;
    }
    return true;
}

function convertPercent( discount ) {
    return .01 * discount;
}

function discountPercentage( amount, discount) {
    validDiscount(discount);
    return amount * convertPercent( discount )
}

function stringCapitalize( input ) {
	return input[0].toUpperCase() + input.substring(1);
}

function evenNumbers( number ) {
    for ( var x=0; x < number && (0 < number < 100); x+=2 ) {
        console.log(x);
    }
}

function isDivisible( number1, number2 ) {
    if ( ( number1 % number2 ) !== 0) return false;
    return true;
}

function oddStart( number ) {
    if (number > 40) { return 41; }
    return 1;
}

function oddNumbers(number) {
    var startNum = oddStart(number);

    for (var x = startNum; ( (startNum < 40) && (x < 40) || (startNum > 40) && (x < 100)); x+=2) {
                console.log(x);
    }
}

oddNumbers(45);

// console.log( discountPercentage( 10, 80) );
// console.log( stringCapitalize("tada"));
// console.log( isDivisible( 3, 3 ) );
