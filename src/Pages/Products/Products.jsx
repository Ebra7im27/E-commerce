import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useDispatch } from "react-redux";
import { addCart } from "../../Redux/Action";

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setfilter] = useState([])

    const dispatch = useDispatch()

    const addproduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()
                // console.log(data)
                setProducts(data)
                setfilter(data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching products:", error)
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const filterProduct = (category) => {
        const updatedList = products.filter(item => item.category === category)
        setfilter(updatedList)
    }

    return (
        <>
            <Header />
            <Container>
                <div className="row justify-content-center">
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" role="status" />
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <>
                            <Container>
                                <h2 className="text-center my-4 fs-1">Latest Products</h2>
                                <hr />
                                <div className="buttons text-center py mb-3">
                                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setfilter(products)}>
                                        All
                                    </button>
                                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>
                                        Men's Clothing
                                    </button>
                                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
                                        Women's Clothing
                                    </button>
                                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>
                                        Jewelery
                                    </button>
                                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>
                                        Electronics
                                    </button>
                                </div>
                                <div className="row justify-content-center">
                                    {filter.map((product) => (
                                        <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                                            <div className="card text-center h-100">
                                                <img className="card-img-top py-3" variant="top" src={product.image} alt={product.title} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{product.title.slice(0, 12)}...</h5>
                                                    <p className="card-text">{product.description.slice(0, 90)}...</p>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item lead">${product.price}</li>
                                                </ul>
                                                <div className="card-body">
                                                    <Link to={"/product/" + product.id} className="btn btn-dark m-1">Buy Now</Link>
                                                    <button
                                                        className="btn btn-dark m-1"
                                                        onClick={() => {
                                                            toast.success("Added to cart")
                                                            addproduct(product)
                                                        }}>Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Container>
                        </>
                    )}
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Products