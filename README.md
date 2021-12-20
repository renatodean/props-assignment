# Props assignment exercise

## Exercise description
```
Description:
You are to build a mechanism that handles users in a queue.
A user can be in the queue only once and the order is “first in first out” (FIFO)
You are dealing with a large-scale system and many users can join the queue simultaneously.

Your Assignment:
Build a queue management class that has the following methods:
1. add – gets a userId as a parameter. Returns the position it got in the queue.
2. removeByUser – gets a userId as a parameter. Removes the user from the queue.
3. removeByPosition – gets a position as a parameter (starting from 1). Removes the user at
that position.
4. move – gets a fromPosition and toPosition as parameters. Moves the user to the new
position.
5. swap – gets position1 and position2 as parameters. Swaps the users between the positions.
6. reverse – reverses the order of the queue: whoever was last is now first.
7. print – prints to stdout the queue in correct order in the following format
{position}:{userId}

If your methods are called with invalid input of any kind have the function return false.
If no return value is specified, return true on success and false on failure.
Your solution should include 2 (or more) files:
1. The queue management class file
2. A Main or Tester file – includes a main (or similar) method, and uses the above class
and performs actions by reading actions.txt file (sample file in the appendix below; each
new line is a new command)
Each action should print to stdout the action that was performed and the return value.
```

