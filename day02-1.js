const fs = require('fs');

fs.readFile('day02-input.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const commands = data.split('\n');
  const position = {
    x: 0,
    y: 0,
  };

  commands.forEach((command) => {
    const [direction, amount] = command.split(' ');

    if (direction === 'forward') {
      position.x -= parseInt(amount, 10);
    } else if (direction === 'down') {
      position.y += parseInt(amount, 10);
    } else if (direction === 'up') {
      position.y -= parseInt(amount, 10);
    }
  });

  const result = Math.abs(position.x * position.y);

  console.log(result);
});
