function movingTarget (input) {
    let target = input.shift().
    split(' ').
    map(x => Number(x))

    let currentLine = input.shift()
    
    while(currentLine !== 'End') {
    let lineArr = currentLine.split(' ')
    let command = lineArr[0];
    let index = Number(lineArr[1]);
    let power = Number(lineArr[2]);

    if(command === 'Shoot') {
        if(target[index]) {

        
        target[index] -= power
        if(target[index] <= 0) {      ////target[index] true or false
            target.splice(index,1)
        }
    }
    } else if (command === 'Add') {
        if(target[index]) {    //target[index] true or false
            target.splice(index,0,power)
        } else {
            console.log('Invalid placement!');
        }
    } else if (command === 'Strike') {
        const radius = power;
        const downNum = index - radius;
        const upperNum = index + radius;

        if(target[downNum] && target[upperNum]) {
            target.splice(downNum ,radius * 2 +1)
        } else {
            console.log(`Strike missed!`);
        }

       

    }



    currentLine = input.shift()
    }

console.log(target.join('|'));
} movingTarget

(["52 74 23 44 96 110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"])