function characterReplacement(s: string, k: number): number {
    let l = 0;
    let r = 0;
    let maxf = 0;
    let res = 0;
    const seenMap = new Map<string, number>();

    while (r < s.length) {
        // Increment the frequency of the current character
        seenMap.set(s[r], (seenMap.get(s[r]) || 0) + 1);
        maxf = Math.max(maxf, seenMap.get(s[r])!);

        // Shrink the window if the condition is violated
        while (r - l + 1 - maxf > k) {
            seenMap.set(s[l], seenMap.get(s[l])! - 1);
            l++;
        }

        // Update the result with the maximum window size
        res = Math.max(res, r - l + 1);
        r++;
    }

    return res;
}