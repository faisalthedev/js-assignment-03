// https://github.com/faisalthedev/js-assignment-03

/**
 * kilometerToMeter
 *  i. Take single input
 *  ii. return the result
 */
function kilometerToMeter(n) {
	if (n < 1) {
		return "Invalid input, input should be 1 or more.";
	} else {
		let meter = n * 1000;
		return meter;
	}
}
let result1 = kilometerToMeter(50);
console.log(result1);

/**
 * budgetCalculator -> 3 perameters
 *  i. watch price = 50
 *  ii. phone price = 100
 *  iii. laptop price = 500
 */
function budgetCalculator(watch, phone, laptop) {
	if (watch < 0 || phone < 0 || laptop < 0) {
		return "Invalid input, input should be 1 or more.";
	} else {
		let watchCost = watch * 50;
		let phoneCost = phone * 100;
		let laptopCost = laptop * 500;

		let totalCost = watchCost + phoneCost + laptopCost;
		return totalCost;
	}
}
let result2 = budgetCalculator(5, 3, 1);
console.log(result2);

/**
 * hotelCost
 *  i. first 10 per night cost $100
 *  ii. 2nd 11-20 night $80
 *  iii. from 21, per night $50
 */
function hotelCost(days) {
	let cost = 0;

	if (days < 0) {
		return "Invalid input, input should be 1 or more.";
	} else if (days <= 10) {
		cost = days * 100;
	} else if (days <= 20) {
		let remaining = days - 10;
		let firstPart = 10 * 100;
		let second10Part = remaining * 80;
		cost = firstPart + second10Part;
	} else {
		let remaining = days - 20;
		let firstPart = 10 * 100;
		let second10Part = 10 * 80;
		let thirdPart = remaining * 50;
		cost = firstPart + second10Part + thirdPart;
	}
	return cost;
}

let result3 = hotelCost(111);
console.log(result3);

/**
 * megaFriend
 *  i. given names on a array, find the max name from array
 */
let friends = ["Shariful", "Shahadat", "Masud", "Islam", "Moniruzzaman", "Moynul"];
function megaFriend(arr) {
	let longestName = "";
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > longestName.length) {
			longestName = arr[i];
		}
	}
	return longestName;
}

let result4 = megaFriend(friends);
console.log(result4);
