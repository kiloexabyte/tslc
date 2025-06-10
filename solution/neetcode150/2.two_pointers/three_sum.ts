function threeSum(nums: number[]): number[][] {
    const res = new Array<Array<number>>()
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i-1] == nums[i]) {
            continue
        }

        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            } else {
                res.push([nums[i], nums[l], nums[r]])
                l++

                while (l < r && nums[l-1] == nums[l]) {
                    l++
                }
            }
        }
    }

    return res
};