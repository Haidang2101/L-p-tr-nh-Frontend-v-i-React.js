type Product = {
    id: string,
    name: string,
    price: number,
    category : {
        id: string,
        name: string
    }
    discount?: number
}

let listProduct: Product[] = [
    {id: "1", name: "Áo sơ mi", price: 1000000, category: {id: "1", name: "Áo"}, discount: 10},
    {id: "2", name: "Áo polo", price: 950000, category: {id: "1", name: "Áo"}},
    {id: "3", name: "Quân âu đen", price: 1500000, category: {id: "2", name: "Quần"}, discount: 15}
]

function getFinalPrice(product: Product): number{
    if (product.discount) {
        return product.price - (product.price / 10)
    } else {
        return product.price
    }
}

function printProductInfo(product: Product): void {
    console.log(`
        Tên: ${product.name}
        Giá gốc: ${product.price}
        Giá sau khi giảm: ${getFinalPrice(product)}
        Danh mục: ${product.category.name}
    `);
}

listProduct.forEach((product) => {
    printProductInfo(product)
})