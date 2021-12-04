const fs = require('fs');

fs.readFile('day03-input.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const lines = data.split('\n');

  let ogr = [...lines];
  let csr = [...lines];

  for (let col = 0; col < ogr[0].length; col++) {
    const linesWithOne = [];
    const linesWithZero = [];

    ogr.forEach((line) => {
      if (line[col] === '1') {
        linesWithOne.push(line);
      } else {
        linesWithZero.push(line);
      }
    });

    if (linesWithOne.length >= linesWithZero.length) {
      ogr = [...linesWithOne];
    } else {
      ogr = [...linesWithZero];
    }
  }

  for (let col = 0; col < csr[0].length; col++) {
    const linesWithOne = [];
    const linesWithZero = [];

    csr.forEach((line) => {
      if (line[col] === '1') {
        linesWithOne.push(line);
      } else {
        linesWithZero.push(line);
      }
    });

    if (linesWithZero.length <= linesWithOne.length) {
      csr = [...linesWithZero];
    } else {
      csr = [...linesWithOne];
    }

    if (csr.length === 1) break;
  }

  const result = parseInt(ogr[0], 2) * parseInt(csr[0], 2);

  console.log(result);
});
