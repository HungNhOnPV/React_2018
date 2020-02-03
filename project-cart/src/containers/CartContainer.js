import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from "prop-types";
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as messages from '../constants/Messages';
import CartResult from '../components/CartResult';

class CartContainer extends Component {
    showCartItem = cart => {
        let result = messages.MSG_CART_EMPTY;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem key = {index} item={item}></CartItem>
            });
        }
        return result;
    }

    showTotalAmount = cart => {
        let result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart} />
        }

        return result;
    }

    render () {
        const { cart } = this.props;
        return(
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    cart: PropsTypes.arrayOf(
        PropsTypes.shape(
            {
                product: PropsTypes.shape({
                    id: PropsTypes.number.isRequired,
                    name: PropsTypes.string.isRequired,
                    image: PropsTypes.string.isRequired,
                    description: PropsTypes.string.isRequired,
                    price: PropsTypes.number.isRequired,
                    inventory: PropsTypes.number.isRequired,
                    rating: PropsTypes.number.isRequired
                }).isRequired,
                quantity: PropsTypes.number.isRequired
            }
        )
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartContainer);