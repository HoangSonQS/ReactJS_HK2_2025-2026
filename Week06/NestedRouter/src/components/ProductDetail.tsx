import { useNavigate, useParams } from "react-router"

const ProductDetail = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    return (
        <>
            <h2>Product Id: {productId}</h2>
            <button onClick={() => navigate(`/checkout/${productId}`)}>Checkout</button>
        </>
    )

}

export default ProductDetail