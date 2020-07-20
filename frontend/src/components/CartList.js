import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { getProducts, clearFromCart, id_user, removeCartProduct } from "../api";

export default class cartlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0,
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

  clearCart() {
    clearFromCart(id_user)
      .then()
      .catch((err) => {
        console.log(err);
      });
    this.setState({ products: [] });
  }
  removeFromCart = (product) => {
    const cart = {
      user: { _id: id_user },
      cart: { _id: product._id },
    };
    let prod = this.state.products.filter((item) => item._id !== product._id);
    console.log(prod);
    removeCartProduct(cart).then();
    this.setState({ products: prod });
  };

  render() {
    const { products, total } = this.state;
    return (
      <div>
        <h3 className="card-title">Cart</h3>
        <hr />
        {products.map((product, index) => (
          <CartItem
            product={product}
            key={index}
            remove={this.removeFromCart}
          />
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
          <div style={{ display: "flex" }}>
            <h3 className="text-warning">No item on the cart</h3>
            <Link to="/">
              <button className="btn btn-warning ml-3">
                Back to List of Ideas
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
        <Link to="/checkout">
          <button className="btn btn-success float-right">Checkout</button>
        </Link>
        <button
          className="btn btn-danger float-right"
          onClick={() => this.clearCart()}
          style={{ marginRight: "10px" }}
        >
          Clear Cart
        </button>
      </div>
    );
  }
}
