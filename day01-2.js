const fs = require('fs');

const threeMeasurement = (array) => {
  return array.reduce((sum, num) => sum + num, array[0]);
};

fs.readFile('day01-input.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const numbers = data.split('\n').map((line) => parseInt(line, 10));

  let previousMeasurement = threeMeasurement(numbers.slice(0, 2));
  let increaseCount = 0;

  for (let i = 1; i < numbers.length - 3; i += 1) {
    currentMeasurement = threeMeasurement(numbers.slice(i, i + 3));

    if (currentMeasurement > previousMeasurement) increaseCount += 1;

    previousMeasurement = currentMeasurement;
  }

  console.log(increaseCount);
});
