export function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const checkThis = target - nums[i];
        if (numMap.has(checkThis)) {
            return [i, numMap.get(checkThis)!];
        }
        numMap.set(nums[i], i);
    }

    return nums;
};