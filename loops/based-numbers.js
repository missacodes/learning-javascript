let myNumber =17;
let binaryStr = "";
while (myNumber > 0) {
    if (myNumber % 2 === 0) {
        binaryStr = "0" + binaryStr;
    }
    else {

        binaryStr = "1" + binaryStr;
    }
    myNumber = Math.floor(myNumber / 2);

}
console.log(binaryStr);
