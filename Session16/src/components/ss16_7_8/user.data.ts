import { Product, products } from "./product.data"
export class User {
    order: Product[]
    quantity: number[]

    constructor(order: Product[], quantity: number[]) {
        this.order = order
        this.quantity = quantity
    }
    getTotal() {
        let total = 0
        for (let i = 0; i < this.order.length; i++) total += this.order[i].price * this.quantity[i]
        return total
    }
    addToCart(product: Product) {
        const index = this.order.findIndex(item => item.id === product.id)
        if (index !== -1) {
            this.quantity[index]++
        } else {
            this.order.push(product)
            this.quantity.push(1)
        }
    }
    increase(id: number) {
        const index = this.order.findIndex(item => item.id === id)
        if (index !== -1) {
            this.quantity[index]++
        }
    }
    decrease(id: number) {
        const index = this.order.findIndex(item => item.id === id)
        if (index !== -1) {
            this.quantity[index]--
            if (this.quantity[index] === 0) {
                this.order.splice(index, 1)
                this.quantity.splice(index, 1)
            }
        }
    }
    deleteFromCart(id: number) {
        const index = this.order.findIndex(item => item.id === id)
        if (index !== -1) {
            this.order.splice(index, 1)
            this.quantity.splice(index, 1)
        }
    }
}
export const user = new User([], [])