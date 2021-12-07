const stringLength = require('./stringLength');

test('String Length Value', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('rosha')).toBe(5);
    expect(stringLength('Barsha')).toBe(6);
});

test('Min Length Error', () => {
    expect(() => {stringLength('')}).toThrow(Error);
});

test('Max Length Error', () => {
    expect(() => stringLength('Disadvantage')).toThrow(/MAX_LENGTH_ERROR/);
});