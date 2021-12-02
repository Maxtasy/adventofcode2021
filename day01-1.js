const fs = require('fs');

fs.readFile('day01-input.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const [firstNumber, ...numbers] = data.split('\n').map((line) => parseInt(line, 10));

  let previousNumber = firstNumber;

  const increaseCount = numbers.reduce((count, number) => {
    if (number > previousNumber) {
      count += 1;
    }

    previousNumber = number;

    return count;
  }, 0);

  console.log(increaseCount);
});
