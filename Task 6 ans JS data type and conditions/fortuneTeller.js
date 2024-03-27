let motherName = prompt("What is your mother's first name?:");
let streetName = prompt("What is the name of the street you grew up on?:");
let favColor = prompt("What is your favorite color as a child?:");
let currentAge = Number(prompt("What is your current age?:"));
let numberBetween1and10 = Number(prompt("Enter a number between 1 and 10:"));

const yearsToMeetBestFriend = numberBetween1and10;
const bestFriendName = `${motherName} ${streetName}`;
const yearsToGetMarried = currentAge + numberBetween1and10;
const numberOfChildren = currentAge % numberBetween1and10;
const yearsUntilDyeHair = Math.round(currentAge / numberBetween1and10);

const fortuneMessage = `
    In ${yearsToMeetBestFriend} years you are going to meet your best friend named ${bestFriendName}.
    You will get married in ${yearsToGetMarried} years and have ${numberOfChildren} children.
    In ${yearsUntilDyeHair} years you are going to dye your hair ${favColor}.
`;

alert(fortuneMessage);
