const fs = require('fs');

fs.readFile('day02-input.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const commands = data.split('\n');
  const position = {
    aim: 0,
    x: 0,
    y: 0,
  };

  commands.forEach((command) => {
    const [instruction, amount] = command.split(' ');

    if (instruction === 'forward') {
      position.x -= parseInt(amount, 10);
      position.y += position.aim * parseInt(amount, 10);
    } else if (instruction === 'down') {
      position.aim += parseInt(amount, 10);
    } else if (instruction === 'up') {
      position.aim -= parseInt(amount, 10);
    }
  });

  const result = Math.abs(position.x * position.y);

  console.log(result);
});
