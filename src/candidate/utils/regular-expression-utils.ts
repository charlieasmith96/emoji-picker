export const checkIfStringContains2AlphanumericCharactersAfterColon = (targetText: string): string[] => {
    const pattern: RegExp = /:\w{2,}/g;
    return targetText.match(pattern) ?? [];
}