// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Niko
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function does basic math
  document.getElementById('add-math').innerHTML = '6 + 5 = ' + (6 + 5)
  document.getElementById('subtract-math').innerHTML = '7 - 3 =  ' + (7 - 3)
  document.getElementById('multiply-math').innerHTML = '3 + 4 * 2 = ' + (3 + 4 * 2)
  document.getElementById('divide-math').innerHTML = '(4 / 2) + 3 = ' + ((4 / 2) + 3)
  document.getElementById('exponent-math').innerHTML = '5 + 2 ** 3 = ' + (5 + 2 ** 3)
  document.getElementById('square-root-math').innerHTML = '√(81) = ' + Math.sqrt(81)
}


function area(length, width) {
  var result = parseInt(length) * parseInt(width);
  document.getElementById("output").innerHTML = result;
}
