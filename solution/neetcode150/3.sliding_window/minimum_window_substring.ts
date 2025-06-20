function minWindow(s: string, t: string): string {
    if (t.length === 0) {
        return "";
    }

    const countT = new Map<string, number>();
    const window = new Map<string, number>();

    for (const c of t) {
        countT.set(c, (countT.get(c) || 0) + 1);
    }

    let have = 0;
    let need = countT.size;
    let res: [number, number] = [0, 0];
    let resLen = Infinity;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        const c = s[r];
        window.set(c, (window.get(c) || 0) + 1);

        if (countT.has(c) && window.get(c) === countT.get(c)) {
            have++;
        }

        while (have === need) {
            if ((r - l + 1) < resLen) {
                res = [l, r];
                resLen = r - l + 1;
            }

            const leftChar = s[l];
            window.set(leftChar, window.get(leftChar)! - 1);

            if (countT.has(leftChar) && window.get(leftChar)! < countT.get(leftChar)!) {
                have--;
            }

            l++;
        }
    }

    return resLen !== Infinity ? s.slice(res[0], res[1] + 1) : "";
}