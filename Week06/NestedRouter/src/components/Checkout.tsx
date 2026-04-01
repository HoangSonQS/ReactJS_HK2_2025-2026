import { useParams } from "react-router-dom"

const Checkout = () => {
    const { productId } = useParams()
    return <h1>Checkout product: {productId} succesful</h1>
}

export default Checkout