// Mảng danh sách sản phẩm
var listProduct = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        discount: 0.2,
        category: {
            id: "C001",
            name: "Thời trang nam",
        },
    },
    {
        id: "P002",
        name: "Giày thể thao",
        price: 800000,
        category: {
            id: "C002",
            name: "Giày dép",
        },
    },
    {
        id: "P003",
        name: "Balo laptop",
        price: 500000,
        discount: 0.1,
        category: {
            id: "C003",
            name: "Phụ kiện",
        },
    },
];
function getFinalPrice(product) {
    if (typeof product.discount === "number") {
        return product.price * (1 - product.discount);
    }
    return product.price;
}
function printProductInfo(product) {
    var finalPrice = getFinalPrice(product);
    console.log("T\u00EAn: ".concat(product.name));
    console.log("Gi\u00E1 g\u1ED1c: ".concat(product.price.toLocaleString(), " VND"));
    console.log("Gi\u00E1 sau gi\u1EA3m: ".concat(finalPrice.toLocaleString(), " VND"));
    console.log("Danh m\u1EE5c: ".concat(product.category.name));
}
listProduct.forEach(printProductInfo);
