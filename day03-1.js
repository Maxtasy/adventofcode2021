const fs = require('fs');

fs.readFile('day03-input.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const lines = data.split('\n');
  const ones = Array(lines[0].length).fill(0);

  lines.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      if (parseInt(line[i])) ones[i]++;
    }
  });

  let gammaRate = '';
  let epsilonRate = '';

  ones.forEach((oneCount) => {
    if (oneCount > lines.length / 2) {
      gammaRate += '1';
      epsilonRate += '0';
    } else {
      gammaRate += '0';
      epsilonRate += '1';
    }
  });

  const result = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

  console.log(result);
});
