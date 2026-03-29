//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  const DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const normalized = inputNumber.trim().toUpperCase();

  // Convert input number to decimal
  let decimalValue = 0;
  for (const digit of normalized) {
    const digitValue = DIGITS.indexOf(digit);
    decimalValue = decimalValue * inputNumberSystem + digitValue;
  }

  // Convert decimal to output number system
  if (decimalValue === 0) return "0";

  let dtoOut = "";
  let remaining = decimalValue;
  while (remaining > 0) {
    const remainder = remaining % outputNumberSystem;
    dtoOut = DIGITS[remainder] + dtoOut;
    remaining = Math.floor(remaining / outputNumberSystem);
  }

  return dtoOut;
}

/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [10];   // Only decimal (base 10) numbers can be used as input
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [16];   // Only hexadecimal (base 16) numbers can be used as output
}


// Tried to check by node js run:
// console.log(main("255", 10, 16));   // Expected: FF
// console.log(main("0", 10, 16));     // Expected: 0
// console.log(main("4096", 10, 16));  // Expected: 1000
