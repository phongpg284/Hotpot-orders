const orders = document.querySelector("#orders");
console.log(orders)
const ordersData = fetch("/order", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
    // body:  {
    //     "userToken": 7513,
    //     "tableID": 1,
    //     "guestQty": 9,
    //     "priceType": 100,
    //     "hotpotType": "lau chua cay"
    // }
}).then(res => res.json())
.then(data => {
    data.forEach(order => {
        const div = document.createElement("div");
        const content = document.createTextNode(order);
        div.appendChild(content);
        orders.appendChild(div)
    })
})
