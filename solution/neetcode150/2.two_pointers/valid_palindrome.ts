function isPalindrome(s: string): boolean {
    s = cleanString(s)
    let l = 0
    let r = s.length - 1

    while(l <= r) {
        if (s[l] !== s[r]) {
            return false
        }

        l++
        r-- 
    }

    return true
};

function isAlphanumeric(char: string): boolean {
    const code = char.charCodeAt(0);
    // Check if the character is a letter (uppercase or lowercase) or a digit
    return (
        (code >= 48 && code <= 57) || // '0' to '9'
        (code >= 65 && code <= 90) || // 'A' to 'Z'
        (code >= 97 && code <= 122)   // 'a' to 'z'
    );
}

function cleanString(s: string): string {
    let result = '';
    for (const char of s) {
        if (isAlphanumeric(char)) { // Use the isAlphanumeric function
            result += char.toLowerCase(); // Convert to lowercase and append to result
        }
    }
    return result;
}