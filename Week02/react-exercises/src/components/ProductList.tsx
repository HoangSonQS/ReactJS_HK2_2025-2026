import ProductCard from "./ProductCard"
import "../styles/components/ProductList.css"
import type { Product } from "../interface/Product"

const ProductList = () => {
    const products: Product[] = [
        {
            id: 1,
            name: "Váy 1",
            price: 100,
            image: "/images/vay1.png"
        },
        {
            id: 2,
            name: "Váy 2",
            price: 200,
            image: "/images/vay2.png"
        },
        {
            id: 3,
            name: "Váy 3",
            price: 300,
            image: "/images/vay3.png"
        }
    ]
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList