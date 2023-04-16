import { checkIfInstanceOf } from './checkIfInstanceOf';

describe('2618. Check if Object Instance of Class', () => {
    test('Example 1', async() => {
        expect(checkIfInstanceOf(new Date(), Date)).toBeTruthy();
    });

    test('Example 2', async() => {
        class Animal {
        }

        class Dog extends Animal {
        }

        expect(checkIfInstanceOf(new Dog(), Animal)).toBeTruthy();
    });

    test('Example 3', async() => {
        expect(checkIfInstanceOf(Date, Date)).toBeFalsy();
    });

    test('Example 4', async() => {
        expect(checkIfInstanceOf(5, Number)).toBeTruthy();
    });
});
