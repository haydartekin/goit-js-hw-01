console.log("- TASK-2 -")


function getShippingMessage(country, Price, DeliveryFee) {
    const totalPrice = Price + DeliveryFee
    return "Shipping to "+ country +" will cost " + totalPrice + " credits! ";
}
console.log(getShippingMessage("Australia", 120, 50))
console.log(getShippingMessage("Germany", 80, 20))
console.log(getShippingMessage("Sweden", 100, 20))