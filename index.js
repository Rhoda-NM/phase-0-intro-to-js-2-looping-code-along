function writeCards(inputArray, eventName){
    let outputArr = [];
    for (let i=0; i <inputArray.length; i++) {
        let cardMessage = `Thank you, ${inputArray[i]}, for the wonderful ${eventName} gift!`;
        outputArr.push(cardMessage);
    }
    return outputArr;
}
function countDown(postiveInt) {
    let int = postiveInt;
    while(int >= 0) {
        console.log(int);
        int--;
    }
}
countDown(10)