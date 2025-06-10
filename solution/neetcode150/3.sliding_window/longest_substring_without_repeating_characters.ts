function lengthOfLongestSubstring(s: string): number {
    let l = 0;
    let r = 0;
    let maxLen = 0;
    const charSet = new Set<string>(); // Use a Set to track characters

    while (r < s.length) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]); // Remove the leftmost character
            l++;
        }

        charSet.add(s[r]); // Add the current character
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }

    return maxLen;
}