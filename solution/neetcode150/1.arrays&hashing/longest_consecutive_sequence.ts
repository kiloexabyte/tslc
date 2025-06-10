function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums); // Store all numbers in a Set for O(1) lookups
    let maxLen = 0;

    for (const num of numSet) {
        // Only start counting if `num` is the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLen = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLen++;
            }

            maxLen = Math.max(maxLen, currentLen); // Update the maximum length
        }
    }

    return maxLen;
}