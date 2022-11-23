const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer) => {
  const name = answer;
  rl.question("What are your favourite activities? ", (answer) => {
    const hobbies = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      const music = answer;
      rl.question("Which meal is your favourite? ", (answer) => {
        const faveFood = answer;
        rl.question("What is your favourite sport? ", (answer) => {
          const faveSport = answer;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
            const superpower = answer;
            console.log(`Meet ${name}. ${name} enjoys ${hobbies}, and while doing that listenig to ${music}. ${name} is a foodie who appreciates ${faveFood} amongst many others. ${name} prefers ${faveSport} over other sports. ${name} has many talents but ${superpower} is definitely a superpower of ${name}.`);
            rl.close();
          });
        });
      });
    });
  });
});