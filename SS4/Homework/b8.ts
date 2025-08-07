type Product = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product;
    quantity: number;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
};

function calculateOrderTotal(order: Order): number {
    let total = 0;
    order.items.forEach(item => {
      total += item.product.price * item.quantity;
    });
    return total;
}

function printOrder(order: Order): void {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log("Sản phẩm:");
    order.items.forEach(item => {
        const name = item.product.name;
        const quantity = item.quantity;
        const total = item.product.price * quantity;
        console.log(`- ${name} × ${quantity} → ${total.toLocaleString("vi-VN")} VND`);
    });
    const totalAmount = calculateOrderTotal(order);
    console.log(`Total: ${totalAmount.toLocaleString("vi-VN")} VND`);
    if (order.note) {
      console.log(`Node: ${order.note}`);
    }
}

const shirt: Product = { id: "1", name: "Sơ mi", price: 250000 };
const pants: Product = { id: "2", name: "Quần tây", price: 400000 };
const order: Order = {
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
