import {describe, expect, test} from '@jest/globals';
import { parseCode } from "../src/parseCode";

describe('ParseCode to new String', () => {
  test('Should pass string corretly with max lenght 4', () => {
    expect(parseCode('5F3Z-2e-9-w', 4)).toBe('5F3Z-2E9W');
  });
  test('Should pass string corretly with max lenght 2', () => {
    expect(parseCode('2-5g-3-J', 2)).toBe('2-5G-3J');
  });
  test('Should pass string corretly with max lenght 2', () => {
    expect(parseCode('12323-sdsad-dde-d', 2)).toBe('12323-SD-SA-DD-DE-D');
  });
});