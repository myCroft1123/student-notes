// Sean O'Dell, Felicia Dixon, Cody Hackney 08/03/2020

// sensei:

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)

// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// This kata is part of the Simple Encryption Series:
// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty






function encrypt(text, n) {
    if (n <= 0 || !text) {
        return text
    };
    let firstHalf = '',
        secondHalf = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
        secondHalf += text[i];
        } else {
        firstHalf += text[i];
        };
    };
    return encrypt(firstHalf + secondHalf, n - 1);
};
  
function decrypt(encryptedText, n) {
    if (n <= 0 || !encryptedText) {
        return encryptedText;
    };
    const length = encryptedText.length;
    let firstHalf = encryptedText.slice(0, Math.floor(encryptedText.length / 2)).split('');
    let secondHalf = encryptedText.slice(Math.floor(encryptedText.length / 2)).split('');
    let text = '';
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
        text += secondHalf.shift();
        } else {
        text += firstHalf.shift();
        };
    };
    return decrypt(text, n - 1);
}