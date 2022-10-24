# 2ExamProblems-JS-Fundamentals

01.First Problem
Shopping List

You will receive an initial list with groceries separated by an exclamation mark "!".

After that, you will be receiving 4 types of commands until you receive "Go Shopping!".

· "Urgent {item}" - add the item at the start of the list. If the item already exists, skip this command.

· "Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.

· "Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.

· "Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.

Constraints

· There won't be any duplicate items in the initial list

Output

· Print the list with all the groceries, joined by ", ":

"{firstGrocery}, {secondGrocery}, … {nthGrocery}"



Examples:
1. Input --> (["Tomatoes!Potatoes!Bread",

"Unnecessary Milk",

"Urgent Tomatoes",

"Go Shopping!"]) 

 Output --> Tomatoes, Potatoes, Bread

2. Input --> (["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",
"Unnecessary Grapes",

"Correct Pepper Onion",

"Rearrange Grapes", 

"Correct Tomatoes Potatoes", 

"Go Shopping!"])   

Output--> Milk, Onion, Salt, Water, Banana


02.Second Problem
Moving Target

You are at the shooting gallery again, and you need a program that helps you keep track of moving targets. On the first line, you will receive a sequence of targets with their integer values, split by a single space. Then, you will start receiving commands for manipulating the targets until the "End" command. The commands are the following:

Command: "Shoot {index} {power}"

o Shoot the target at the index if it exists by reducing its value by the given power (integer value).

o Remove the target if it is shot. A target is considered shot when its value reaches 0.

Command: "Add {index} {value}"

o Insert a target with the received value at the received index if it exists.

o If not, print: "Invalid placement!"

Command: "Strike {index} {radius}"

o Remove the target at the given index and the ones before and after it depending on the radius.

o If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.

Command: "End"

o Print the sequence with targets in the following format and end the program:

"{target1}|{target2}…|{targetn}"

Input:
· On the first line, you will receive the sequence of targets .

· On the following lines, until the "End" will be receiving the command described above – strings.

· There will never be a case when the "Strike" command would empty the whole sequence.

Output:
Print the appropriate message in case of any command if necessary.

· In the end, print the sequence of targets in the format described above.

Examples:
1. Input-->(["52 74 23 44 96

110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"]) 

Output --> Invalid placement! 52|100

2. Input --> (["1 2 3 4 5",

"Strike 0 1",

"End"])

Output --> Strike missed! 1|2|3|4|5



