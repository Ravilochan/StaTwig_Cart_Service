import React from "react";
import { Link, Redirect } from "react-router-dom";
import { getProducts, clearFromCart, id_user, pay } from "../api";
import Paypal from "./Paypal";
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0,
      redirect: null,
    };
  }

  componentDidMount() {
    getProducts().then((item) => {
      let total = 0;
      for (var i = 0; i < item.length; i++) {
        total += item[i].price;
      }
      this.setState({ products: item, total });
    });
  }
  render() {
    const { products, total } = this.state;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    const transactionSuccess = (event) => {
      event.type = "Success";
      let transdata = {
        user: id_user,
        cartDetails: products,
        paymentData: event,
      };
      pay(transdata)
        .then(() => {
          clearFromCart(id_user)
            .then(() => {
              console.log("cleared cart");
              this.setState({ products: [], redirect: "/onSuccess" });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };

    const transactionError = (data) => {
      data.type = "Error";
      let transdata = {
        user: id_user,
        cartDetails: products,
        paymentData: data,
      };
      pay(transdata)
        .then(() => {
          alert("Transaction Error");
        })
        .catch((err) => console.log(err));
    };

    const transactionCanceled = (data) => {
      data.type = "Cancelled";
      let transdata = {
        user: id_user,
        cartDetails: products,
        paymentData: data,
      };
      pay(transdata)
        .then(() => {
          alert("Transaction Cancelled");
        })
        .catch((err) => console.log(err));
    };

    return (
      <div className="container">
        <h3 className="card-title">Checkout</h3>
        <hr />
        {products.map((product, index) => (
          <div key={index}>
            <p>
              {product.idea_headline}
              <span className="float-right text-primary">${product.price}</span>
            </p>
            <hr />
          </div>
        ))}
        <hr />
        {products.length ? (
          <div>
            <h4>
              <small>Total Amount:</small>
              <span className="float-right text-primary">${total}</span>
            </h4>
            <hr />
          </div>
        ) : (
          ""
        )}
        {!products.length ? (
          <h3 className="text-warning">No item in the cart</h3>
        ) : (
          ""
        )}
        <div className="row float-right">
          {products.length ? (
            <Paypal
              toPay={total}
              onSuccess={transactionSuccess}
              transactionError={transactionError}
              transactionCanceled={transactionCanceled}
            />
          ) : (
            ""
          )}
          <Link to="/">
            <button
              className="btn btn-danger float-right"
              style={{ marginLeft: "0.5em" }}
            >
              Cancel
            </button>
          </Link>
        </div>

        <br />
        <br />
        <br />
      </div>
    );
  }
}
