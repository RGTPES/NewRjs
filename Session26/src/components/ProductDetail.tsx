
import { useParams } from 'react-router';

export default function ProductDetail() {
    const {id} = useParams();
    return (
        <div>
            <h1>Product id: {id}</h1>
        </div>
    )
}
