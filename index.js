// Code your solutions in this file
function writeCards(names, surprise) {
    let messages = [];
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);

    }
    return messages;
    
}

function countDown() {
    let countDown = 10;
    while (countDown >=0) {
        console.log(countDown--);
    }
}