function generateParenthesis(n: number): string[] {
    const res: string[] = [];
    const stack: string[] = [];

    function backtrack(openN: number, closeN: number) {
        if (openN === closeN && closeN === n) {
            res.push(stack.join(""));
            return;
        }

        if (openN < n) {
            stack.push("(");
            backtrack(openN + 1, closeN);
            stack.pop();
        }

        if (closeN < openN) {
            stack.push(")");
            backtrack(openN, closeN + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);
    return res;
}