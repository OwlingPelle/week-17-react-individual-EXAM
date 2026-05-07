import { Link } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import './cart.css';

const Cart = () => {
	const cart = useCartStore((state) => state.cart);
};

export default Cart;
