let args = process.argv.slice(2)
// CHALLENGE //
//challenge Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//  The user can specify an unlimited number of alarms using command line arguments
// CHALLENGE //



function alarmClock(input) {
  let inputInSeconds = Number(input) * 1000
  // console.log(typeof inputInSeconds)

  // edge case (1)
  if (input === undefined) {
    return
  }
  // edge case (2)+(3)
  if (Math.sign(input) === -0 || Math.sign(input) === -1 || Math.sign(input) === NaN) {
    return
  }
  // we use setTimeout on each arg (because we call the function in a loop on line:31)
  setTimeout(() => {
    process.stdout.write('\x07');
  }, inputInSeconds)
}

// loop through our args
for (let arg of args) {
  alarmClock(arg)
}


/* // EDGE CASES //
With every software project, developers need to think about edge cases.

Confirm that our script can handle some common edge cases.

For this app, we can think of at least these three:

(1)No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
(2)An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
(3)An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/ // EDGE CASES //