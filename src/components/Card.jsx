import PropTypes from 'prop-types';


const Card = ({product, updateCart, inCart, removeFromCart}) => {
    return (
            <div className="col mb-5">
            <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                
                <img className="card-img-top" src={product.imageUrl} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{product.Title}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                        <span className="text-muted text-decoration-line-through">${product.rangeTo.toFixed(2)}</span>
                        &nbsp; ${product.rangeFrom.toFixed(2)}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={inCart ? removeFromCart: updateCart}>{inCart? "Remove from cart" : "Add to cart"}</button></div>
                </div>
            </div>
        </div>
        
    )
}

Card.propTypes = {
    product: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        rangeTo: PropTypes.number.isRequired,
        rangeFrom: PropTypes.number.isRequired,
    }).isRequired,
    updateCart: PropTypes.func.isRequired,
    inCart: PropTypes.bool.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default Card;