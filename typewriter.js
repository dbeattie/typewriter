let userName = `Darren Beattie`
const sentence = `Hello there from ${userName} & Lighthouse Labs!\n`;
let delay = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50)
};