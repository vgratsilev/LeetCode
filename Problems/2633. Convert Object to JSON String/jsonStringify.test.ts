import { jsonStringify } from './jsonStringify';

describe('2633. Convert Object to JSON String', () => {
    test('Example 1', async() => {
        const obj = { 'y': 1, 'x': 2 };
        expect(jsonStringify(obj)).toBe('{"y":1,"x":2}');
    });

    test('Example 2', async() => {
        const obj = { 'a': 'str', 'b': -12, 'c': true, 'd': null };
        expect(jsonStringify(obj)).toBe('{"a":"str","b":-12,"c":true,"d":null}');
    });

    test('Example 3', async() => {
        const obj = { 'key': { 'a': 1, 'b': [ {}, null, 'Hello' ] } };
        expect(jsonStringify(obj)).toBe('{"key":{"a":1,"b":[{},null,"Hello"]}}');
    });

    test('Example 4', async() => {
        const obj = true;
        expect(jsonStringify(obj)).toBe('true');
    });
});
