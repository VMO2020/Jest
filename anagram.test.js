const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
	expect(isAnagram).toBeDefined();
});

test('isAnagram function exists', () => {
	expect(typeof isAnagram).toEqual('function');
});

test('Check is an anagram', () => {
	expect(isAnagram('hola', 'laoh')).toBeTruthy();
});

test('Check is an anagram', () => {
	expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('Check is NOT an anagram', () => {
	expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
