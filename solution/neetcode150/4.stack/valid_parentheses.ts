function isValid(s: string): boolean {
    const stack: string[] = [];
    const dict: Map<string, string> = new Map([
        [']', '['],
        ['}', '{'],
        [')', '('],
    ]);

    for (const c of s) {
        if (dict.has(c)) {
            if (stack.length > 0 && stack[stack.length - 1] === dict.get(c)) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    if (stack.length === 0) return true;
    return false
};