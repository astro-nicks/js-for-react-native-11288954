
function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Task 2: Function to format an array of strings based on corresponding numbers
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        return processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers); // [3, 4, 9, 16, 15]

const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const formattedStrings = formatArrayStrings(strings, processedNumbers); // ['apple', 'BANANA', 'cherry', 'DATE', 'elderberry']

console.log(processedNumbers);
console.log(formattedStrings);


