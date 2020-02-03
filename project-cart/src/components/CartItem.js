import React from "react";

class CartItem extends React.Component {
  showSubTotal = () => {
    const { item } = this.props;
    return item.product.price * item.quantity;
  }
  render() {
    const { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={ item.product.image }
            alt={ item.product.image }
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{ item.product.name }</strong>
          </h5>
        </td>
        <td>{ item.product.price }$</td>
        <td className="center-on-small-only">
          <span className="qty">{ item.quantity } </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
            >
              <a href>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
            >
              <a href>+</a>
            </label>
          </div>
        </td>
        <td>{ this.showSubTotal() }$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
