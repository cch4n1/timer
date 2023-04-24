// define alarmTimer function and takes an array of numbers as arguement
const alarmTimer = function(args) {
  // filters command line arguements and takes only inputs that are numbers
  const validNum = args.filter((argsElement) => {
    // checks if input is a valid number ()
    return !isNaN(argsElement) && argsElement > 0;
  });
  // checks if any numbers are provided
  if (!validNum.length) {
    console.log(`Please enter a valid number!`);
    return;
  }
  // loop through validNum array to find each number
  for (const num of validNum) {
    // call setTimeout to set timer
    setTimeout(() => {
      // alarm sound
      process.stdout.write('\x07');
      // print message
      console.log(`This is the ${num} second alarm!`);
    },
    // set time for each alarm based on each number input from command line
    num * 1000
    );
  }
  // print message
  console.log(`Alarms set for: ${validNum.join(", ")} seconds.`);
};

// call alarmTimer function and get command line arguements
alarmTimer(process.argv.slice(2));