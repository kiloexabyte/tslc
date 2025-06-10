function trap(height: number[]): number {
    if (height.length == 0) {
        return 0
    }

    let l = 0
    let r = height.length - 1
    let lmax = height[l]
    let rmax = height[r]
    let area = 0

    while (l < r) {
        if (lmax < rmax) {
            l++
            lmax = Math.max(lmax, height[l])
            area += lmax - height[l]
        } else {
            r--
            rmax = Math.max(rmax, height[r])
            area += rmax - height[r]
        }
    }

    return area

};