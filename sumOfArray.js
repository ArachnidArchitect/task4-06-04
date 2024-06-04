let myArray = [2,5,7,10,50]

function sumOfArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    console.log(sum)
}
sumOfArray(myArray)