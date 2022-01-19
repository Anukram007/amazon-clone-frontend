import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function index() {
  return (
    <>
      <Header page="cart"/>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <h3>Shopping Cart</h3>
            <p
              className="text-muted float-right mt-n3"
              style={{ fontSize: "13px" }}
            >
              Price
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="row border-top py-3">
              <div className="col-md-3">
                <img
                  src="assets/img/product_images/product02.png"
                  alt="product img 02"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-9">
                <a href="#">
                  Attitude Is Everything: Change Your Attitude ... Change Your
                  Life!
                </a>
                <p className="text-uppercase font-weight-bold my-0 float-right">
                  <i
                    className="fas fa-rupee-sign"
                    style={{ fontSize: "10px" }}
                  ></i>{" "}
                  <span>150.00</span>
                </p>
                <p className="text-muted my-0">by Jeff Keller</p>
                <p
                  className="my-0"
                  style={{ fontSize: "12px", fontWeight: 700 }}
                >
                  Paperback
                </p>
                <p
                  className="my-0"
                  style={{ fontSize: "12px", color: "#007600" }}
                >
                  In stock
                </p>

                <div className="d-flex flex-row mt-2">
                  <div className="input-group" style={{ width: "90px" }}>
                    <div className="input-group-prepend">
                      <button className="btn btn-info btn-sm">-</button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="quantity"
                      id="quantity"
                      value="1"
                      disabled
                    />
                    <div className="input-group-append">
                      <button className="btn btn-info btn-sm">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row border-top py-3">
              <div className="col-md-3">
                <img
                  src="assets/img/product_images/product03.png"
                  alt="product img 02"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-9">
                <a href="#">
                  Ikigai: The Japanese secret to a long and happy lifeIkigai:
                  The Japanese secret to a long and happy life
                </a>
                <p className="text-uppercase font-weight-bold my-0 float-right">
                  <i
                    className="fas fa-rupee-sign"
                    style={{ fontSize: "10px" }}
                  ></i>{" "}
                  <span>285.00</span>
                </p>
                <p className="text-muted my-0">by Héctor García</p>
                <p
                  className="my-0"
                  style={{ fontSize: "12px", fontWeight: 700 }}
                >
                  Hardcover
                </p>
                <p
                  className="my-0"
                  style={{ fontSize: "12px", color: "#007600" }}
                >
                  In stock
                </p>

                <div className="d-flex flex-row mt-2">
                  <div className="input-group" style={{ width: "90px" }}>
                    <div className="input-group-prepend">
                      <button className="btn btn-info btn-sm">-</button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="quantity"
                      id="quantity"
                      value="1"
                      disabled
                    />
                    <div className="input-group-append">
                      <button className="btn btn-info btn-sm">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row border-top py-3">
              <div className="col-md-12">
                <p className="float-right">
                  Subtotal (2 item):{" "}
                  <span className="font-weight-bold">
                    <i
                      className="fas fa-rupee-sign"
                      style={{ fontSize: "10px" }}
                    ></i>
                    435.00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center pl-md-5 pl-0">
            <img
              src="assets/img/shopping_cart_image.png"
              className="img-fluid mt-md-n5 mt-0"
              alt="amazon image"
            />

            <div className="card my-3">
              <div className="card-header bg-transparent">
                <p
                  className="text-center text-success my-0"
                  style={{ fontSize: "15px" }}
                >
                  <i className="fas fa-check"></i> Your first order qualifies
                  for FREE Delivery.
                </p>
              </div>
              <div className="card-body text-center">
                <p>
                  Subtotal (2 item):{" "}
                  <span className="font-weight-bold">
                    <i
                      className="fas fa-rupee-sign"
                      style={{ fontSize: "10px" }}
                    ></i>
                    435.00
                  </span>
                </p>
                <button className="btn btn-warning btn-sm btn-block">
                  Proceed to Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default index;
