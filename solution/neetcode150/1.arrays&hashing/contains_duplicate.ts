function containsDuplicate(nums: number[]): boolean {
    const numSet = new Set(nums);
    return numSet.size !== nums.length;
};