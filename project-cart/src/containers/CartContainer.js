import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from "prop-types";
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as messages from '../constants/Messages';
import CartResult from '../components/CartResult';
import * as actions from '../actions/index';

class CartContainer extends Component {
    showCartItem = cart => {
        const { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        let result = <tr>
                        <td>{messages.MSG_CART_EMPTY}</td>
                    </tr>;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem 
                            key = {index} 
                            item={item} 
                            onDeleteProductInCart={onDeleteProductInCart}
                            onChangeMessage={onChangeMessage}
                            onUpdateProductInCart={onUpdateProductInCart}
                            ></CartItem>
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
    ).isRequired,
    onDeleteProductInCart: PropsTypes.func.isRequired,
    onChangeMessage: PropsTypes.func.isRequired,
    onUpdateProductInCart: PropsTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: product => {
            dispatch(actions.actDeleteProductInCart(product));
        },
        onChangeMessage: message => {
            dispatch(actions.actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);