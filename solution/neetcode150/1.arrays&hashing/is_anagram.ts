function isAnagram(s: string, t: string): boolean {
    let l1 = s.length;
    let l2 = t.length;

    if (l1 !== l2) {
        return false;
    }

    const charMapS = new Map<string, number>();
    const charMapT = new Map<string, number>();

    for (let i = 0; i < l1; i++) {
        const charS = s.charAt(i);
        const charT = t.charAt(i);

        if (charMapS.has(charS)) {
            charMapS.set(charS, charMapS.get(charS)! + 1); // Increment by 1
        } else {
            charMapS.set(charS, 1); // Initialize if not present
        }

        if (charMapT.has(charT)) {
            charMapT.set(charT, charMapT.get(charT)! + 1); // Increment by 1
        } else {
            charMapT.set(charT, 1); // Initialize if not present
        }
    }

    for (const key of charMapS.keys()) {
        if (charMapS.get(key) !== charMapT.get(key)) {
            return false; // Mismatch in character counts
        }
    }

    return true;

};