import heroImage from '../assets/Wheater-App-Hero.png';
function Hero() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img
                src={heroImage}
                className="d-block mx-lg-auto img-fluid"
                />
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
                Weather-App
            </h1>
            <p className="lead">
            Consultá el estado del tiempo en cualquier parte del mundo de forma rápida y sencilla. Nuestra app te muestra información actualizada sobre temperatura, viento, y más, usando datos en tiempo real para que estés siempre preparado.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                >
                Clima
                </button>
                    <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                    >
                    Mares
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Hero;