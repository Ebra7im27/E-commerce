import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Marquee from "react-fast-marquee";
import { Navbar } from "../../Components";
import { useDispatch } from "react-redux";
import { addCart } from "../../Redux/Action";

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const addproduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json()
                setProduct(data)

                // Fetch similar products based on the same category
                const response2 = await fetch(`https://fakestoreapi.com/products/category/${data.category}`)
                const similarData = await response2.json()
                setSimilarProducts(similarData)

                setLoading(false)
            } catch (error) {
                console.error("Error fetching product:", error)
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    const ShowSimilarProducts = () => (
        <div className="py-4 my-4">
            <h2 className="mb-4">You may also like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
                {similarProducts.map((item) => (
                    <div key={item.id} className="card mx-4 text-center" style={{ width: "18rem" }}>
                        <img
                            className="card-img-top p-3"
                            src={item.image}
                            alt="Card"
                            height={300}
                            width={300}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.title.slice(0, 15)}...</h5>
                            <Link
                                to={"/product/" + item.id}
                                className="btn btn-dark m-1"
                            >
                                Buy Now
                            </Link>
                            <button
                                className="btn btn-dark m-1"
                                onClick={() => {
                                    toast.success("Added to cart")
                                    addproduct(product)
                                }}>Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    )

    return (
        <>
            <Navbar />
            <Container className="py-5">
                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" role="status" />
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-6">
                            <p className="fs-1 text-uppercase fw-light">{product.category}</p>
                            <h2 className="fs-6 fw-bold">{product.title}</h2>
                            <p className="fs-2 text-uppercase fs-5">
                                {product.rating.rate}{" "}
                                <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
                            </p>
                            <p className="fs-2">${product.price}</p>
                            <p>{product.description}</p>
                            <button
                                className="btn btn-dark m-1"
                                onClick={() => {
                                    toast.success("Added to cart")
                                    addproduct(product)
                                }}>Add To Cart
                            </button>
                            <Link to={"/cart"} className="btn btn-dark">Go to Cart</Link>
                            <button
                                onClick={() => navigate(-1)}
                                className="btn btn-secondary m-2"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                )}
                <ShowSimilarProducts />
            </Container>
        </>
    )
}

export default Product