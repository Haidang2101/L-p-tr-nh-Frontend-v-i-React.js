function calculateOrderTotal(order) {
    var total = 0;
    order.items.forEach(function (item) {
        total += item.product.price * item.quantity;
    });
    return total;
}
function printOrder(order) {
    console.log("\u0110\u01A1n h\u00E0ng: #".concat(order.orderId));
    console.log("Kh\u00E1ch h\u00E0ng: ".concat(order.customerName));
    console.log("Sản phẩm:");
    order.items.forEach(function (item) {
        var name = item.product.name;
        var quantity = item.quantity;
        var total = item.product.price * quantity;
        console.log("- ".concat(name, " \u00D7 ").concat(quantity, " \u2192 ").concat(total.toLocaleString("vi-VN"), " VND"));
    });
    var totalAmount = calculateOrderTotal(order);
    console.log("Total: ".concat(totalAmount.toLocaleString("vi-VN"), " VND"));
    if (order.note) {
        console.log("Node: ".concat(order.note));
    }
}
var shirt = { id: "1", name: "Sơ mi", price: 250000 };
var pants = { id: "2", name: "Quần tây", price: 400000 };
var order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn B",
    items: [
        {
            product: shirt,
            quantity: 2
        },
        {
            product: pants,
            quantity: 1
        },
    ],
    note: "Giao sau 18h",
};
printOrder(order);
