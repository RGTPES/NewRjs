import React, { PureComponent } from 'react'

interface Props {
    name?: string;
}
interface Products {
id: number;
    Name: string;
    Price: number;
    stock: number;
}
interface State {
    Products: Products;
}


class Exersice05 extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            Products:{
                id: 0,
                Name: '',
                Price: 0,
                stock: 50
            }
        }
    }

    render() {
        const Product = {
            id: this.state.Products.id,
            Name: this.state.Products.Name,
            Price: this.state.Products.Price,
            stock: this.state.Products.stock
        }
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(Product);
        }
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            this.setState({
                Products: {
                    ...this.state.Products,
                    [name]: value
                }
            });
        }

        return (
            <>
            <form  onSubmit={handleSubmit}>
            <h2>MA San Pham</h2>
            <input type="text" name="id" onChange={handleChange}/>
            <h2>Ten San Pham</h2>
            <input type="text" name="Name" onChange={handleChange}/>
            <h2>Price</h2>
            <input type="text" name="Price" onChange={handleChange}/>
            <h2>Stock</h2>
            <input type="number" name="stock" value={this.state.Products.stock} onChange={handleChange} />
            <br />
            <button type="submit">Dang ki</button>
            </form>
            
            </>
        )
    }
}

export default Exersice05
