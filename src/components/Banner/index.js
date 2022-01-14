import React from "react";
import Footer from "../Footer";

function index() {
  return (
    <div className="container-fluid px-0">
      <div id="imageSlider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/img/slider/slide01.jpg"
              className="d-block w-100"
              height="450"
              alt="slide image 01"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/img/slider/slide02.jpg"
              className="d-block w-100"
              height="450"
              alt="slide image 02"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/img/slider/slide03.jpg"
              className="d-block w-100"
              height="450"
              alt="slide image 03"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/img/slider/slide04.jpg"
              className="d-block w-100"
              height="450"
              alt="slide image 04"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/img/slider/slide05.jpg"
              className="d-block w-100"
              height="450"
              alt="slide image 05"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          role="button"
          href="#imageSlider"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          role="button"
          href="#imageSlider"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container mb-5" style={{ marginTop: "-200px" }}>
        <div className="row">
          <div className="col-lg-3">
            <div className="card my-2 my-lg-0">
              <div className="card-body d-flex justify-content-center">
                <a href="#">
                  <img
                    src="assets/img/product_images/product02.png"
                    alt="product img 02"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-footer bg-transparent py-0">
                <div className="row my-1">
                  <div className="col-md-6">
                    <p className="font-weight-bold text-danger">
                      <i className="fas fa-rupee-sign"></i> 150.00
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-warning btn-sm btn-block">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card my-2 my-lg-0">
              <div className="card-body d-flex justify-content-center">
                <a href="#">
                  <img
                    src="assets/img/product_images/product03.png"
                    alt="product img 03"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-footer bg-transparent py-0">
                <div className="row my-1">
                  <div className="col-md-6">
                    <p className="font-weight-bold text-danger">
                      <i className="fas fa-rupee-sign"></i> 150.00
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-warning btn-sm btn-block">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card my-2 my-lg-0">
              <div className="card-body d-flex justify-content-center">
                <a href="#">
                  <img
                    src="assets/img/product_images/product02.png"
                    alt="product img 02"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-footer bg-transparent py-0">
                <div className="row my-1">
                  <div className="col-md-6">
                    <p className="font-weight-bold text-danger">
                      <i className="fas fa-rupee-sign"></i> 150.00
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-warning btn-sm btn-block">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card my-2 my-lg-0">
              <div className="card-body d-flex justify-content-center">
                <a href="#">
                  <img
                    src="assets/img/product_images/product03.png"
                    alt="product img 03"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-footer bg-transparent py-0">
                <div className="row my-1">
                  <div className="col-md-6">
                    <p className="font-weight-bold text-danger">
                      <i className="fas fa-rupee-sign"></i> 150.00
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-warning btn-sm btn-block">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-md-4 mt-0">
          <div className="col-lg-3">
            <div className="card my-2 my-lg-0">
              <div className="card-body d-flex justify-content-center">
                <a href="#">
                  <img
                    src="assets/img/product_images/product02.png"
                    alt="product img 02"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-footer bg-transparent py-0">
                <div className="row my-1">
                  <div className="col-md-6">
                    <p className="font-weight-bold text-danger">
                      <i className="fas fa-rupee-sign"></i> 150.00
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-warning btn-sm btn-block">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card my-2 my-lg-0">
              <div className="card-body d-flex justify-content-center">
                <a href="#">
                  <img
                    src="assets/img/product_images/product03.png"
                    alt="product img 03"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-footer bg-transparent py-0">
                <div className="row my-1">
                  <div className="col-md-6">
                    <p className="font-weight-bold text-danger">
                      <i className="fas fa-rupee-sign"></i> 150.00
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-warning btn-sm btn-block">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card my-2 my-lg-0">
              <div className="card-body d-flex justify-content-center">
                <a href="#">
                  <img
                    src="assets/img/product_images/product02.png"
                    alt="product img 02"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-footer bg-transparent py-0">
                <div className="row my-1">
                  <div className="col-md-6">
                    <p className="font-weight-bold text-danger">
                      <i className="fas fa-rupee-sign"></i> 150.00
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-warning btn-sm btn-block">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card my-2 my-lg-0">
              <div className="card-body d-flex justify-content-center">
                <a href="#">
                  <img
                    src="assets/img/product_images/product03.png"
                    alt="product img 03"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-footer bg-transparent py-0">
                <div className="row my-1">
                  <div className="col-md-6">
                    <p className="font-weight-bold text-danger">
                      <i className="fas fa-rupee-sign"></i> 150.00
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-warning btn-sm btn-block">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
