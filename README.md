# DPU Footy
For learning to code!

Remember _don't use the page refresh button_, because that will reset everything back to how it started.

Again, the exercises are all about the JavaScript in `program.js`.

## Reminders
* The equals sign is used to set the _value_ of a _variable_.
For example, `ballSpeed = 0` sets the value of the variable `ballSpeed` to zero.
* A `function` is just a small program, packaged up inside some braces (`{` and `}`).
* In the programming language we are using, JavaScript, statements must end with a semicolon.
* This programming platform, "trinket", shows JavaScript _keywords_ in purple.

## How this Program Works
The platform detects when the cursor (the Ditcham Park logo) is touching the ball.
When this happens, the `playerMoved` function is _called_, meaning it is run.
If the player is moving fast enough and is touching the ball, the ball is set going
at the same speed and direction as the player.

While the ball has any speed, the `moveBall` program is run, and then repeated every 50th of a second.
To your eye, it look like it's moving smoothly, but actually it's moving in steps.
During each step, the ball gets slower. That's why it eventually comes to a stop.

## Exercises
1. Find the code that decides if the player is touching the ball. _(clue: look in `playerMoved`)_
1. What is the JavaScript _keyword_ that means "and"?
_(clue: try and read aloud what comes after the `if`)_
1. Find where the text in the goal is set. Can you make it say something else?
1. Add a new `if` statement in `moveBall` that detects if the ball is touching the goal.
_(clue: copy the `if` from `playerMoved` and adjust it)_
1. Inside the new `if` statement, make the text in the goal say "GOAL!".
1. Now make the text also say who has scored. _(clue: create a new variable for the player's name)_

## Bonus
This program does quite a bit of maths, to work out the correct speeds and directions of the player
and the ball. If you have done any trigonometry, you'll spot _sin_, _cos_ and _tan_, and Pythagoras's
theorem. These are used a lot in computer graphics programming.
