function topKFrequent(nums: number[], k: number): number[] {
    const countMap = new Map<number,number>();

    const freq: number[][] = []

    for (let i = 0; i < nums.length; i++) {
        if (countMap.has(nums[i])) {
            countMap.set(nums[i], countMap.get(nums[i])! + 1);
        } else {
            countMap.set(nums[i], 1); 
        }
    }

    countMap.forEach((value, key) => {
        if (!freq[value]) {
            freq[value] = []; 
        }
        freq[value].push(key);
    });

    const res: number[] = []

    for (let i = freq.length - 1; i > -1; i--) {
        if (freq[i]) { // Ensure freq[i] is not undefined
            freq[i].forEach((n) => {
                if (res.length === k) {
                    return res;
                }
                res.push(n);
            });
        }
    }

    return res
    
};