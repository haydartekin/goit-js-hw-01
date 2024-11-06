console.log("- TASK-1 -")

function makeTransaction(quantity, PricePerDroid) {
    let totalPrice = quantity * PricePerDroid;
    return "You Ordered " + quantity + " droids worth " + totalPrice + " credits! ";
}

console.log(makeTransaction(5, 3000))
console.log(makeTransaction(3, 1000))
console.log(makeTransaction(10, 500))