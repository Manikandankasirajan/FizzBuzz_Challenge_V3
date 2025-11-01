import fizzbuzz from "../fizzbuzz";
test("returns number", () => {
	const num = 1;
	expect(fizzbuzz(num)).toBe(1);
});

test("returns Fizz if number is divisible by 3", () => {
	const num = 3;
	expect(fizzbuzz(num)).toBe("Fizz");
});
