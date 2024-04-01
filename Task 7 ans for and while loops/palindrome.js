// ask user to enter a word
let word = prompt("Enter one word:");

// initialize variables for iterating from start and end of the word
let start = 0;
let end = word.length - 1;
let isPalindrome = true;

// while loop to check if the word is palindrome or not
while (start < end) {
    // compare characters from start and end of the word
    if (word[start] !== word[end]) {
        isPalindrome = false;
        break;
    } 
    // move to the next characters
    start++;
    end--;
}

// display whether the word is palindrome or not
if (isPalindrome) {
    alert(`"${word}" is a palindrome.`);
} else {
    alert(`"${word}" is not a palindrome.`);
}
