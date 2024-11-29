function reverseString(str) {
    return str.split('').reverse().join('');
}

const input = 'Hello, World!';
const reversed = reverseString(input);
console.log('Reversed String:', reversed);
