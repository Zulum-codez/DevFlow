/**
 * Example test file
 * @module tests/example.test.js
 */

describe('Example Test Suite', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  test('should pass a basic assertion', () => {
    expect(1 + 1).toBe(2);
  });

  test('should handle strings correctly', () => {
    const str = 'hello';
    expect(str).toBe('hello');
    expect(str).toHaveLength(5);
  });

  test('should handle arrays correctly', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
    expect(arr).toContain(3);
  });

  test('should handle objects correctly', () => {
    const obj = { name: 'John', age: 30 };
    expect(obj).toHaveProperty('name');
    expect(obj.name).toBe('John');
  });

  describe('Nested Test Suite', () => {
    test('should work with nested tests', () => {
      expect(true).toBe(true);
    });
  });
});
