import { useParams } from "react-router"

const ProductDetail = () => {
    const { productId } = useParams()
    return <h2>Product Id: {productId}</h2>
}

export default ProductDetail