import React from "react";
import { Link, Redirect } from "react-router-dom";
import { getProducts, clearFromCart, id_user } from "../api";
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

  componentWillMount() {
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
    const transactionSuccess = (data) => {
      console.log(data);
      clearFromCart(id_user)
        .then(() => {
          this.setState({ products: [], redirect: "/onSuccess" });
        })
        .catch((err) => console.log(err));
    };

    const transactionError = () => {
      console.log("Paypal error");
    };

    const transactionCanceled = () => {
      console.log("Transaction canceled");
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
