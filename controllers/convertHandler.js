/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const inputNum = input.split(/[a-z]/)[0];
    if (inputNum == "") return 1;
    const testRegex = /\d+(\.\d+)?(\/\d+(\.\d+)?)?/g;
    const matches = inputNum.match(testRegex);
    if (matches.length === 1 && matches[0].length === inputNum.length) {
      return inputNum;
    } else {
      throw new Error("invalid number");
    }
  };
  
  this.getUnit = function(input) {
    const inputUnit = input.slice(input.indexOf(input.match(/[a-z]/)[0]));
    var units = ['gal','l','mi','km','lbs','kg'];
    if (units.includes(inputUnit)) {
      return inputUnit;
    } else {
      throw new Error("invalid unit");
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var inputUnits = ['gal','l','mi','km','lbs','kg'];
    var outputUnits = ['l','gal','km','mi','kg','lbs'];
    return outputUnits[inputUnits.indexOf(initUnit)];
  };

  this.spellOutUnit = function(unit) {
    var inputUnits = ['gal','l','mi','km','lbs','kg'];
    var spellOutUnits = ['gallon','liter','mile','kilometer','pound','kilogram'];
    return spellOutUnits[inputUnits.indexOf(unit)];
  };
  
  this.convert = function(initNum, initUnit) {
    const val = eval(initNum);
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case 'gal':
        result = val * galToL;
        break;
      case 'lbs':
        result = val * lbsToKg;
        break;
      case 'mi':
        result = val * miToKm;
        break;
      case 'l':
        result = val / galToL;
        break;
      case 'kg':
        result = val / lbsToKg;
        break;
      case 'km':
        result = val / miToKm;
        break;
      default: 
        result = 0;
        break;
    }
    return Math.round(result * 100000) / 100000;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)}s converts to ${returnNum} ${this.spellOutUnit(returnUnit)}s`;
  };
  
}

module.exports = ConvertHandler;
