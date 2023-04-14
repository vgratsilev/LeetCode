import { debounce } from './debounce';

jest.useFakeTimers();

describe('2627. Debounce', () => {
    let func: jest.Mock;
    let dFunc: Function;

    beforeEach(() => {
        func = jest.fn();
        dFunc = debounce(func, 50);
    });

    test('Example 1', async() => {
        dFunc();
        dFunc();
        dFunc();

        jest.runAllTimers();

        expect(func).toBeCalledTimes(1);
    });
});
