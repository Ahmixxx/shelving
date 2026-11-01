import { expect, test } from "bun:test";
import { isConstructor } from "shelving/util/class";

// Capitalised plain function (looks like a component name, but is not a class).
function Abc() {}

test("isClass(): Works correctly", () => {
	// Classes.
	expect(isConstructor(class Abc {})).toBe(true);
	expect(isConstructor(class {})).toBe(true);

	// Non-classes.
	expect(isConstructor(true)).toBe(false);
	expect(isConstructor("abc")).toBe(false);
	expect(isConstructor(123)).toBe(false);
	expect(isConstructor(function abc() {})).toBe(false);
	expect(isConstructor(Abc)).toBe(false);
	expect(isConstructor(() => {})).toBe(false);
});
