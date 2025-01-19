import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../Components";
import "./Checkout.css";
import { useSelector } from "react-redux";

function Checkout() {
    const EmptyCheckout = () => {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 text-center">
                        <div className="p-4 bg-white rounded shadow-sm checkout-container">
                            <h4 className="display-5 mb-4 checkout-title">Your Cart is Empty</h4>
                            <p className="mb-4 checkout-message">
                                Looks like you haven't added anything to your cart yet. Start shopping to proceed to checkout.
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

    const ShowCheckout = () => {
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
            <div className="container py-5">
                <div className="row my-4">
                    {/* Billing Address and Payment */}
                    <div className="col-md-7 col-lg-8">
                        <div className="card mb-4 checkout-form">
                            <div className="card-header py-3">
                                <h4 className="mb-0">Billing Address</h4>
                            </div>
                            <div className="card-body">
                                <form className="needs-validation border-0" noValidate>
                                    <div className="row g-3">
                                        <div className="col-sm-6 my-1">
                                            <label htmlFor="firstName" className="form-label">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="John"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                        <div className="col-sm-6 my-1">
                                            <label htmlFor="lastName" className="form-label">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Doe"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>

                                        <div className="col-12 my-1">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="you@example.com"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address.
                                            </div>
                                        </div>

                                        <div className="col-12 my-1">
                                            <label htmlFor="address" className="form-label">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                placeholder="1234 Main St"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="address2" className="form-label">
                                                Address 2 <span className="text-muted">(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address2"
                                                placeholder="Apartment or suite"
                                            />
                                        </div>

                                        <div className="col-md-5 my-1">
                                            <label htmlFor="country" className="form-label">
                                                Country
                                            </label>
                                            <select className="form-select" id="country" required>
                                                <option value="">Choose...</option>
                                                <option value="DE">Germany</option>
                                                <option value="AR">Argentina</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option>Other</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="state" className="form-label">
                                                State
                                            </label>
                                            <select className="form-select" id="state" required>
                                                <option value="">Choose...</option>
                                                <option value="Cairo">Cairo</option>
                                                <option value="Alexandria">Alexandria</option>
                                                <option value="Giza">Giza</option>
                                                <option value="Sharm El Sheikh">Sharm El Sheikh</option>
                                                <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                                                <option value="Luxor">Luxor</option>
                                                <option value="Aswan">Aswan</option>
                                                <option value="Port Said">Port Said</option>
                                                <option value="Suez">Suez</option>
                                                <option value="Damietta">Damietta</option>
                                                <option value="Hurghada">Hurghada</option>
                                                <option value="Berlin">Berlin</option>
                                                <option value="Bavaria">Bavaria</option>
                                                <option value="Hamburg">Hamburg</option>
                                                <option value="Hesse">Hesse</option>
                                                <option value="North Rhine-Westphalia">North Rhine-Westphalia</option>
                                                <option value="Baden-Württemberg">Baden-Württemberg</option>
                                                <option value="Lower Saxony">Lower Saxony</option>
                                                <option value="Rhineland-Palatinate">Rhineland-Palatinate</option>
                                                <option value="Saxony">Saxony</option>
                                                <option value="Thuringia">Thuringia</option>
                                                <option value="Buenos Aires">Buenos Aires</option>
                                                <option value="Córdoba">Córdoba</option>
                                                <option value="Santa Fe">Santa Fe</option>
                                                <option value="Mendoza">Mendoza</option>
                                                <option value="Tucumán">Tucumán</option>
                                                <option value="Salta">Salta</option>
                                                <option value="Chaco">Chaco</option>
                                                <option value="Misiones">Misiones</option>
                                                <option value="San Juan">San Juan</option>
                                                <option value="La Pampa">La Pampa</option>
                                                <option value="Riyadh">Riyadh</option>
                                                <option value="Jeddah">Jeddah</option>
                                                <option value="Mecca">Mecca</option>
                                                <option value="Medina">Medina</option>
                                                <option value="Dammam">Dammam</option>
                                                <option value="Taif">Taif</option>
                                                <option value="Tabuk">Tabuk</option>
                                                <option value="Abha">Abha</option>
                                                <option value="Al Khobar">Al Khobar</option>
                                                <option value="Hail">Hail</option>
                                                <option>Other</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>

                                        <div className="col-md-3 my-1">
                                            <label htmlFor="zip" className="form-label">
                                                Zip
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip"
                                                placeholder="12345"
                                                required
                                                maxlength="5"
                                                pattern="\d{5}"
                                            />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    <h4 className="mb-3">Payment</h4>

                                    <div className="row gy-3">
                                        <div className="col-md-6">
                                            <label htmlFor="cc-name" className="form-label">
                                                Name on card
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc-name"
                                                placeholder="John Doe"
                                                required
                                            />
                                            <small className="text-muted">
                                                Full name as displayed on card
                                            </small>
                                            <div className="invalid-feedback">
                                                Name on card is required.
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="cc-number" className="form-label">
                                                Credit card number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc-number"
                                                placeholder="1234 5678 9012 3456"
                                                required
                                                maxlength="19"
                                                pattern="\d{13, 19}"
                                            />
                                            <div className="invalid-feedback">
                                                Credit card number is required.
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="cc-expiration" className="form-label">
                                                Expiration
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc-expiration"
                                                placeholder="MM/YY"
                                                required
                                                maxlength="5"
                                                pattern="(0[1-9]|1[0-2])\/\d{2}"
                                            />
                                            <div className="invalid-feedback">
                                                Expiration date required.
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="cc-cvv" className="form-label">
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc-cvv"
                                                placeholder="123"
                                                required
                                                maxlength="4"
                                                pattern="\d{3, 4}"
                                            />
                                            <div className="invalid-feedback">
                                                Security code required.
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    <button
                                        className="w-100 btn btn-primary btn-lg checkout-button"
                                        type="submit"
                                    >
                                        Continue to checkout
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Checkout</h1>
                <hr />
                {state.length ? <ShowCheckout /> : <EmptyCheckout />}
            </div>
            <Footer />
        </>
    )
}

export default Checkout
