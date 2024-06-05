let input = document.querySelector('#numInp')
let addBtn = document.querySelector('#addBtn')
let sumBtn = document.querySelector('#sumBtn')
let htmlArray = document.querySelector('#arrDisp')
let display = document.querySelector('#currVal')


let userArray = []
function addToArray(val) {
   userArray.push(val)
   console.log(userArray)
   htmlArray.innerText = userArray
}

addBtn.addEventListener('click', ()=>{
   addToArray(input.value)
   console.log(input.value)
})

sumBtn.addEventListener('click', ()=>{
    sumOfArray(userArray)
})




let myArray = [2,5,7,10,50]

function sumOfArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = parseInt(sum) + parseInt(array[i]);
        
    }
    display.innerText = sum
}
