import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../Components";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../../Redux/Action";

function Cart() {
    const EmptyCart = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 text-center">
                        <div className="p-4 bg-white rounded shadow-sm cart-container">
                            <h4 className="display-5 mb-4 cart-title">Your Cart is Empty</h4>
                            <p className="mb-4 cart-message">
                                Looks like you haven't added anything to your cart yet.
                            </p>
                            <Link
                                to="/products"
                                className="btn btn-dark btn-lg px-5 py-2 continue-shopping-btn"
                            >
                                <i className="fa fa-arrow-left mr-2"></i> Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const addItem = (product) => {
        dispatch(addCart(product))
    }
    const removeItem = (product) => {
        dispatch(delCart(product))
    }

    const ShowCart = () => {
        let totalProducts = 0
        let delivery = 30.0
        let totalItems = 0
        state.map((item) => {
            return (totalProducts += item.price * item.qty)
        })
        state.map((item) => {
            return (totalItems += item.qty)
        })

        return (
            <>
                <section className="h-100 bg-light">
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center my-4">
                            {/* ****************************************** Start Item List ********************************************* */}
                            <div className="col-md-8">
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-header py-3 bg-white">
                                        <h5 className="mb-0 font-weight-bold text-dark">Item List</h5>
                                    </div>

                                    <div className="card-body">
                                        {state.map((item) => (
                                            <div key={item.id}>
                                                <div className="row d-flex align-items-center mb-4">
                                                    <div className="col-lg-3 col-md-12">
                                                        <div className="bg-image rounded overflow-hidden shadow-sm">
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="img-fluid"
                                                                style={{ width: '100%', height: 'auto' }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-5 col-md-6">
                                                        <p className="mb-0 font-weight-bold text-dark">{item.title}</p>
                                                    </div>

                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <button
                                                                className="btn btn-danger btn-sm px-3"
                                                                onClick={() => removeItem(item)}
                                                            >
                                                                <i className="fas fa-minus"></i>
                                                            </button>

                                                            <p className="mx-3 mb-0 font-weight-bold">{item.qty}</p>

                                                            <button
                                                                className="btn btn-success btn-sm px-3"
                                                                onClick={() => addItem(item)}
                                                            >
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>

                                                        <p className="text-start text-md-center mb-0">
                                                            <strong>
                                                                <span className="text-muted">{item.qty}</span> x ${item.price}
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* ****************************************** End Item List ********************************************* */}

                            {/* ****************************************** Start Order Summary ********************************************* */}
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-header py-3 bg-white">
                                        <h5 className="mb-0 font-weight-bold text-dark">Order Summary</h5>
                                    </div>

                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                <span>Products ({totalItems})</span>
                                                <span>${Math.round(totalProducts)}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <span>delivery</span>
                                                <span>${delivery}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total Price</strong>
                                                </div>
                                                <span>
                                                    <strong>${Math.round(totalProducts + delivery)}</strong>
                                                </span>
                                            </li>
                                        </ul>

                                        <Link
                                            to="/checkout"
                                            className="btn btn-dark btn-lg btn-block mt-3 shadow-sm"
                                        >
                                            Go to checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* ****************************************** End Order Summary ********************************************* */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Cart</h1>
                <hr />
                {state.length > 0 ? <ShowCart /> : <EmptyCart />}
            </div>
            <Footer />
        </>
    )
}

export default Cart