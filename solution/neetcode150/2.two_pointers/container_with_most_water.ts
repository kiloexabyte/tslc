function maxArea(height: number[]): number {
    let l = 0
    let r = height.length - 1

    let maxArea = 0

    while (l < r) {
        let w = r - l
        let h = Math.min(height[l], height[r])
        const area = w * h

        maxArea = Math.max(area, maxArea)

        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }

    return maxArea
};