import { checkIfStringContains2AlphanumericCharactersAfterColon } from "./regular-expression-utils";

describe("regular-expressions-utils", () => {
  it('should return matches', () => {
    const result = checkIfStringContains2AlphanumericCharactersAfterColon('test:ab:ba');
    expect(result).toEqual([':ab', ':ba'])
  })

  it('should return no matches', () => {
    const result = checkIfStringContains2AlphanumericCharactersAfterColon('testba');
    expect(result).toEqual([])
  })
});
