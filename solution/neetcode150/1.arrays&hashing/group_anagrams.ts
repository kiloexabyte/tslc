function groupAnagrams(strs: string[]): string[][] {
    const resMap = new Map<string,string[]>()

    strs.forEach((str) => {
        const key = str.split("").sort().join("");
        if (resMap.has(key)) {
            resMap.get(key)!.push(str); 
        } else {
            resMap.set(key, [str]);
        }
    })

    const result:string[][] = []

    resMap.forEach((value) => {
        result.push(value);
    })

    return result
};