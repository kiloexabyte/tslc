function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false;
    }

    let l = 0;
    let r = s1.length;
    let matches = 0;

    const s1freq = new Array(26).fill(0);
    const s2freq = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        if (s1freq[i] == s2freq[i]) {
            matches++
        }
	}

    while (r < s2.length) {
        if (matches == 26) {
            return true;
        }

        let i = s2.charCodeAt(r) - 'a'.charCodeAt(0);
        s2freq[i]++;
        if (s1freq[i] == s2freq[i]) {
            matches++
        } else if (s1freq[i] + 1 == s2freq[i]) {
            matches--
        }

        i = s2.charCodeAt(l) - 'a'.charCodeAt(0);
        s2freq[i]--;
        if (s1freq[i] == s2freq[i]) {
            matches++
        } else if (s1freq[i] - 1 == s2freq[i]) {
            matches--
        }

        r++;
        l++;
    }

    return matches == 26
};