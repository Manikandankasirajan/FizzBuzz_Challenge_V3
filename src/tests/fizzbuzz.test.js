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

test("returns FizzBuzz if number is divisible by both 3 & 5", () => {
	const num = 15;
	expect(fizzbuzz(num)).toBe("FizzBuzz");
});

test("returns FizzBuzz for zero as it is divisible by both 3 & 5", () => {
	const num = 15;
	expect(fizzbuzz(num)).toBe("FizzBuzz");
});

test("returns array of results till given range", () => {
	const num = 15;
	const result = [];
	for (let i = 1; i <= num; i++) {
		result.push(fizzbuzz(i));
	}
	expect(result).toStrictEqual([
		1,
		2,
		"Fizz",
		4,
		"Buzz",
		"Fizz",
		7,
		8,
		"Fizz",
		"Buzz",
		11,
		"Fizz",
		13,
		14,
		"FizzBuzz",
	]);
});

test("throw error for invalid input type", () => {
	const num = "as";

	expect(() => fizzbuzz(num)).toThrow();
	expect(() => fizzbuzz(num)).toThrow(TypeError);
	expect(() => fizzbuzz(num)).toThrow("Invalid Input Type");
});
