import '../styles/components/ProductCart.css'
import type { Product } from "../interface/Product"

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className='product-cart'>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className='product-info'>
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button className="btn-add">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard