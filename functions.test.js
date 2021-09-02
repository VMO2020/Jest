const functions = require('./functions');

// Before & After Example

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

// Using DESCRIBE for multiples tests
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
	beforeEach(() => nameCheck());

	test('User if Jeff', () => {
		const user = 'Jeff';
		expect(user).toBe('Jeff');
	});

	test('User if Karen', () => {
		const user = 'Karen';
		expect(user).toBe('Karen');
	});
});

// ToBe
test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

test('Substract 5 - 2 to equal 3', () => {
	expect(functions.substract(5, 2)).toBe(3);
});

// NOT ToBe
test('Adds 2 + 2 to NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull matches only null
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

// toBeUndefined matches anly undefined
// toBeDefined is the opposite of toBeUndefined

// toBeTruthy matches anything that an if statement treats as true
test('Should be truthy, send 2 return 2', () => {
	expect(functions.checkValue(2)).toBeTruthy();
});

// toBeFalsy matches anything that an if statement treats as false
// past null, 0 or undefined will be falsy
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

// OBJECTS AND ARRAYS toEqual
test('User should be Brad Traversy object', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'Brad',
		lastName: 'Traversy',
	});
});

// Less than, greater than and equal
test('Should be under 1600', () => {
	const value1 = 500;
	const value2 = 1000;
	expect(value1 + value2).toBeLessThan(1600);
});

test('Should be greater than 1600', () => {
	const value1 = 800;
	const value2 = 1000;
	expect(value1 + value2).toBeGreaterThan(1600);
});

test('Should be greater or equal than 1600', () => {
	const value1 = 800;
	const value2 = 800;
	expect(value1 + value2).toBeGreaterThanOrEqual(1600);
});

// Regex (Regular expressions)
test('There is not "I" or "i" in "team"', () => {
	expect('team').not.toMatch(/I/i);
});

//Arrays: toContain
test('Should be "admin" in usernames', () => {
	const usernames = ['jhon', 'karen', 'admin'];
	expect(usernames).toContain('admin');
});

// Workin with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
// 	expect.assertions(1);
// 	return functions.fetchUser().then((data) => {
// 		expect(data.name).toEqual('Leanne Graham');
// 	});
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});
