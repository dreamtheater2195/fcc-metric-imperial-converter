/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      const input = req.query.input.trim().toLowerCase().replace(/\s*/g, '');
      try {
        //regex to test the whole input matches the pattern (number - unit)
        const regex = /^(\d+(\.\d+)?(\/\d+(\.\d+)?)?)?[a-z]+$/;
        if (regex.test(input)) {
          var initNum = convertHandler.getNum(input);
          var initUnit = convertHandler.getUnit(input);
          var returnNum = convertHandler.convert(initNum, initUnit);
          var returnUnit = convertHandler.getReturnUnit(initUnit);
          var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
          res.json({
            initNum,
            initUnit,
            returnNum,
            returnUnit,
            string: toString});
        } else {
          throw new Error("invalid input");
        }
      } catch (err) {
        return res.send(err.message);
      }
    });
    
};
