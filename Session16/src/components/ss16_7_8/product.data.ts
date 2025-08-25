export class Product {
    id: number
    name: string
    price: number
    img: string
    constructor(id: number, name: string, price: number, img: string) {
        this.id = id
        this.name = name
        this.price = price
        this.img = img
    }
}
export const products: Product[] = [
    new Product(1, "Điện thoại Samsung Galaxy", 20000000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(2, "Điện thoại Iphone14 Promax", 20500000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(3, "Điện thoại Samsung Galaxy", 21000000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(4, "Điện thoại Iphone11 Promax", 21500000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(5, "Điện thoại Samsung Galaxy", 22000000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(6, "Điện thoại Samsung Galaxy", 22500000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(7, "Điện thoại Oppo A9", 23000000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(8, "Điện thoại Oppo V5", 23500000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(9, "Điện thoại Oppo A9", 23000000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
    new Product(10, "Điện thoại Oppo V5", 23500000, "https://img.hungmobile.vn/hungmobile-vn/2025/05/samsung-a36-hungmobile-1.jpg"),
]
