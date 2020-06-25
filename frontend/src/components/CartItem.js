import React from "react";
import { BASE_URL, id_user } from "../api";
import { useHistory } from "react-router-dom";
export default class CartItem extends React.Component {
  removeItem(product) {
    // let id = localStorage.getItem("id");
    // if (!id) return;
    const cart = {
      user: { _id: id_user },
      cart: { _id: product._id },
    };
    fetch(`${BASE_URL}/api/uncart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then(() => {
        const history = useHistory();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { product } = this.props;
    return (
      <div id="main_data" className="card" style={{ marginBottom: "10px" }}>
        <div className="card-body">
          <h4 className="card-title">{product.idea_headline}</h4>
          <h5 className="card-text">{product.idea_description}</h5>
          <blockquote className="text-muted">
            {product.idea_owner_name}
          </blockquote>
          <h5 className="card-text">
            <strong>
              <small>price: </small>${product.price}
            </strong>
          </h5>
          <button
            className="btn btn-sm btn-warning float-right"
            onClick={() => this.removeItem(product)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}
