const lengthOfLongestSubstring = function(s) {
    const currChars = new Set();
    let maxLen = 0;
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        while (currChars.has(s[j])) {
            currChars.delete(s[i]);
            i++;
        }
        currChars.add(s[j]);
        maxLen = Math.max(currChars.size, maxLen);
    }
    return maxLen; 
};