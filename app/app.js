let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum (array) {
    return numbers.reduce((sum, number) => sum += number, 0)
}

console.log(sum(numbers))