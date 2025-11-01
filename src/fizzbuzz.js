import isBuzz from "./utils/isBuzz";
import isFizz from "./utils/isFizz";
import isFizzBuzz from "./utils/isFizzBuzz";

export default function fizzbuzz(num) {
	if (typeof num !== "number") {
		throw new TypeError("Invalid Input Type");
	} else {
		if (isFizzBuzz(num)) {
			return "FizzBuzz";
		} else if (isFizz(num)) {
			return "Fizz";
		} else if (isBuzz(num)) {
			return "Buzz";
		}
		return num;
	}
}
