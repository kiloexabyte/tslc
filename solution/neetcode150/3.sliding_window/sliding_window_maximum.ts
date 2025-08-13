function maxSlidingWindow(nums: number[], k: number): number[] {
    let l = 0;
    let r = 0;

    const res: number[] = [];
    const q: number[] = []; 

    while (r < nums.length) {
        while (q.length > 0 && nums[q[q.length - 1]] < nums[r]) {
            q.pop();
        }

        q.push(r);

        if (l > q[0]) {
            q.shift();
        }

        if (r + 1 >= k) {
            res.push(nums[q[0]]);
            l++;
        }

        r++;
    }

    return res;
};