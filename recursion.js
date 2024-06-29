//learning about recursive

function countDown(num) {
    if (num <= 0) {
        console.log("all done");
        return;
    }
    console.log(num)
    num--;
    countDown(num)
}
countDown(5)

function sumRange(num){
    if(num === 1) return 1
    return num + sumRange(num - 1)
}

//factorial
// function factorial (num){
//     let total = 1;
//     for (let i = num; i > 1 ; i--){
//         total *-i;
//     }
//     return total
// }
function factorial (num){
    if(num === 1) return 1;
    return num * factorial(num - 1)
}