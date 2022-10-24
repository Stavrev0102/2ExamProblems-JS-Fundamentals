function shoppingList(input) {
    let list = input.shift().split('!');

    let command1 = input.slice();
    let currentCommand = command1.shift()
    

    let index = 0;
    let command = input[index]


    while (command !== 'Go Shopping!') {
        let currentCommand = command.split(' ')

        if (currentCommand[0] === 'Urgent') {
            if (!list.includes(currentCommand[1])) {
                list.unshift(currentCommand[1])
            }
        } else if (currentCommand[0] === 'Unnecessary') {

            if (list.includes(currentCommand[1])) {
                let remove = list.indexOf(currentCommand[1])
                list.splice(remove, 1)
            }
        } else if (currentCommand[0] === 'Correct') {
            if (list.includes(currentCommand[1])) {
                let change = list.indexOf(currentCommand[1])
                list.splice(change + 1, 0, currentCommand[2])
                list.splice(change, 1)
            }
        } else if (currentCommand[0] === 'Rearrange') {
            if (list.includes(currentCommand[1])) {
                let toChange = list.indexOf(currentCommand[1])
                list.splice(toChange, 1)
                list.push(currentCommand[1])
            }
        }

        index++
        command = input[index]
    }
    console.log(list.join(', '));




}shoppingList((["Tomatoes!Potatoes!Bread",

"Unnecessary Milk",

"Urgent Tomatoes",

"Go Shopping!"]))