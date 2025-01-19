function Main() {
    return (
        <>
            <div className="hero border-1 pb-1">
                <div className="card bg-dark text-white border-0 mx-3">
                    <img
                        className="card-img img-fluid"
                        src="/assets/Main.jpg"
                        alt="Photo"
                        height={500} />
                </div>
                <div className="card-img-overlay d-flex align-items-center">
                    <div className="container">
                        <h5 className="card-title fs-1 text text-white fw-lighter">Welcome to our store</h5>
                        <p className="card-text fs-5 d-none d-sm-block text-white">
                            Discover premium products with unbeatable quality and great prices. Shop now for convenience and exceptional service.
                            Whether you're upgrading your lifestyle or finding the perfect gift, we've got you covered.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main