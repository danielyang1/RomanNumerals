"use strict";

function getUserInput(userNumberMessage) {
	var input;
	input = prompt(userNumberMessage);
	return input;
}

function verifyNumber(arabicNum, userNumberMessage) {
	if (isNaN(arabicNum) === false ) {
		alert("Converting Arabic to Roman Nummerals!");
		return arabicNum;
	} else {
		alert("Not that advanced yet!")
	}
	return arabicNum;
}

function getRN(realNum) {
	var decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var romanNumbers;
	var x;
	romanNumbers = '';
    for (x = 0; x < decimalArray.length; x++) {
      while (realNum >= decimalArray[x]) {
        realNum -= decimalArray[x];
        romanNumbers += romanArray[x];
      }
    }
		return romanNumbers;
};

function displayRN(ending) {
	alert(ending);
}

function main() {
	var arabicNum;
	var userNumberMessage;
	var realNum;
	var show;
	var ending;
	userNumberMessage = "Enter Number To Be Converted";
	arabicNum = getUserInput(userNumberMessage);
	realNum = verifyNumber(arabicNum, userNumberMessage);
	ending = getRN(realNum);
	show = displayRN(ending);
}
main();