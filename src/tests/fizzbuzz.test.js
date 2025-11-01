import fizzbuzz from "../fizzbuzz";

test("returns number", () => {
	const num = 1;
	expect(fizzbuzz(num)).toBe(1);
});

test("returns Fizz if number is divisible by 3", () => {
	const num = 3;
	expect(fizzbuzz(num)).toBe("Fizz");
});

test("returns Buzz if number is divisible by 5", () => {
	const num = 5;
	expect(fizzbuzz(num)).toBe("Buzz");
});

test("returns FizzBuzz if number is divisible by 15", () => {
	const num = 15;
	expect(fizzbuzz(num)).toBe("FizzBuzz");
});
