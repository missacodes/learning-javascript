function isPalindrome(word) {
    const lower = word.toLowerCase();
    let reversedWord = "";
    for (i = lower.length - 1; i>=0; i--){
        reversedWord += lower[i];
    }
    return lower === reversedWord;

}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("moonlight"));
console.log(isPalindrome("aviary"));

