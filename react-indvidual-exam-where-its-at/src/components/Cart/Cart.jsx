import { Link } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import './cart.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
	const cart = useCartStore((state) => state.cart);
};

export default Cart;
