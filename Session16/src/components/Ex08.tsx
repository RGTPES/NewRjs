import React, {Component, ChangeEvent, use} from "react"
import './ss16_7_8/ss16_9.css'
import { Product, products } from "./ss16_7_8/product.data"
import { User, user } from "./ss16_7_8/user.data"

class ShoppingCart extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            showCart : false
        }
    }
    handleAdd(product: Product) {
        user.addToCart(product)
        this.setState({showCart: true})
    }
    handleIncrease(product: Product) {
        user.increase(product.id)
        this.setState({showCart: true})
    }
    handleDecrease(product: Product) {
        user.decrease(product.id)
        this.setState({showCart: true})
    }
    handleDelete(product: Product) {
        user.deleteFromCart(product.id)
        this.setState({showCart: true})
    }
    render() {
        const total = user.getTotal()
        return (
            <div className="shopping-cart">
                <div className="navbar"><p>Trang chủ     Danh sách sản phẩm</p> <span style={{cursor: "pointer", fontSize: "20px"}} onClick={() => this.setState({showCart: !this.state.showCart})}>&#128722;</span></div>
                <div className="product-list">
                    {products.map((product: Product) => (
                    <div className="product-item" key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Giá: {product.price.toLocaleString()} VNĐ</p>
                        <button onClick={() => this.handleAdd(product)}>Thêm vào giỏ hàng</button>
                    </div>
                ))}
                </div>
                {this.state.showCart && (
                    <div className="cart-card">
                        <h2>Cart</h2>
                        <hr />
                        <div className="order-list">
                            {user.order.map((product, index) => (
                            <div key={product.id} className="cart-item">
                                <img src={product.img} alt={product.name} style={{width: "60px"}} />
                                <span className="title-product">{product.name}</span>
                                <button onClick={() => this.handleDecrease(product)}> - </button>
                                <span className="quantity-product">{user.quantity[index]}</span>
                                <button onClick={() => this.handleIncrease(product)}>+</button>
                                <span onClick={() => this.handleDelete(product)} style={{cursor: "pointer"}}>&#128465;</span>
                            </div>
                        ))}
                        </div>
                        <hr />
                        <p><b>Tổng tiền: {total.toLocaleString()} VNĐ</b></p>
                    </div>
                )}
            </div>
        )
    }
}
export default ShoppingCart