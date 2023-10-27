import { capitalise, reverseString, add, subtract, multiply, divide } from "./func";

test('capitalise', () => {
    expect(capitalise('today')).toBe('TODAY');
})
test('reverseString', () => {
    expect(reverseString('today')).toBe('yadot');
})
test('addition', () => {
    expect(add(5, 2)).toBe(7);
})
test('subtraction', () => {
    expect(subtract(5, 2)).toBe(3);
})
test('multiplication', () => {
    expect(multiply(5, 2)).toBe(10);
})
test('divide', () => {
    expect(divide(6, 2)).toBe(3);
})
