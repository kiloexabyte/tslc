function productExceptSelf(nums: number[]): number[] {
    let pre = 1
    let post = 1
    const res:number[] = []
    res[0] = 1

    for (let i = 1; i < nums.length; i++) {
        pre *= nums[i-1]
        res[i] = pre
    }

    for (let i = nums.length - 1; i > -1; i--) {
        res[i] *= post
        post *= nums[i]
    }

    return res
};