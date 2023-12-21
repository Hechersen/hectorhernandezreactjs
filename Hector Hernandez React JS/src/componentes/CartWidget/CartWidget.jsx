import './CartWidget.module.css';
import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" />
            <span>0</span>
        </div>
    )
}

export default CartWidget