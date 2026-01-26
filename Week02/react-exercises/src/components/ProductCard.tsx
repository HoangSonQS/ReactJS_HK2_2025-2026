import '../styles/components/ProductCart.css'

const ProductCart = () => {
    return (
        <div className='product-cart'>
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Nike Shoe" className="product-img"/>
            <div className='product-info'>
                <h3>Nike Air Max</h3>
                <p className="price">$120.0</p>
                <button className="btn-add">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCart