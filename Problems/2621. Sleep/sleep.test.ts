import { sleep } from './sleep';

describe('2621. Sleep', () => {
    test('Example 1', async() => {
        let t = Date.now();
        sleep(100).then(() => {
            expect(Date.now() - t).toBe(100);
        });
    });

    test('Example 2', async() => {
        let t = Date.now();
        sleep(200).then(() => {
            expect(Date.now() - t).toBe(200);
        });
    });
});
