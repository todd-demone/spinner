const spinnerChars = ['|', '/', '-', '\\', '|'];
let time = 100;
for (let i = 0; i < spinnerChars.length; i++) {
  setTimeout((time) => {
    process.stdout.write(`\r${spinnerChars[i]}   `);
    if (i === spinnerChars.length - 1) process.stdout.write('\n');
  }, time);
  time += 200;
}