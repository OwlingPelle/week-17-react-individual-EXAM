import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import OrderList from '../../components/OrderList/OrderList';
import Button from '../../components/Button/Button';
import { generateTickets } from '../../utils/generateTickets';
import './orderPage.css';

const OrderPage = () => {
	const navigate = useNavigate();
	const cartContent = useCartStore((state) => state.cart);
	const cartQty = cartContent.reduce((acc, e) => acc + e.qty, 0);

	const { cart, increaseQty, decreaseQty, setTickets, clearCart } = useCartStore();

	const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

	const handleOrder = () => {
		const generated = generateTickets(cart);

		setTickets(generated);

		clearCart();
		// navigate('/tickets');
	};
	// if (cartContent.length === 0) {
	// 	return (
	// 		<section className='page'>
	// 			<header className='header'>
	// 				<h1 className='header__title'>Order</h1>
	// 			</header>
	// 			<p className='page-msg'>
	// 				Hoppsan, här var det tomt. <br />
	// 			</p>
	// 		</section>
	// 	);
	// }
	return (
		<section className='page'>
			<header className='header'>
				<h1 className='header__title'>Order</h1>
			</header>

			{cartQty > 0 && (
				<section className='order-page__wrapper'>
					<OrderList cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
					<section className='order__summary'>
						<p className='order__subtitle'>Totalt värde på order:</p>
						<h2 className='order__total'>{total} sek</h2>
					</section>
					<Button text='Skicka order' onClick={handleOrder} />
				</section>
			)}
		</section>
	);
};

export default OrderPage;

// import { useCartStore } from '../../stores/useCartStore';
// import './orderPage.css';
// import Button from '../../components/Button/Button';
// import OrderList from '../../components/OrderList/OrderList';

// const OrderPage = () => {
// 	const { cart, increaseQty, decreaseQty } = useCartStore();

// 	const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// 	return (
// 		<section className='page'>
// 			<header className='header'>
// 				<h1 className='header__title'>Order</h1>
// 			</header>

// 			<section className='order-page__wrapper'>
// 				<OrderList cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} />

// 				<section className='order__summary'>
// 					<p className='order__subtitle'>Totalt värde på order: </p>
// 					<h2 className='order__total'>{total} sek</h2>
// 				</section>
// 				<Button text='Skicka order' />
// 			</section>
// 		</section>
// 	);
// };

// export default OrderPage;

// const OrderPage = () => {
// 	const { cart, addToCart, removeFromCart } = useCartStore();

// 	const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// 	return (
// 		<section className='page'>
// 			<header className='header'>
// 				<h1 className='header__title'>Order</h1>
// 			</header>
// 			<section className='order-page__wrapper'>
// 				{cart.map((item) => (
// 					<article key={item.id} className='order-item'>
// 						<h2 className='order-item__name'>{item.name}</h2>
// 						<p className='order-item__date'>
// 							{item.date} kl {item.start} - {item.end}
// 						</p>

// 						<Counter qty={item.qty} onIncrease={() => addToCart(item)} onDecrease={() => removeFromCart(item.id)} />

// 						<p className='order-item__subtotal'>{item.price * item.qty} sek</p>
// 					</article>
// 				))}
// 				<section className='order__summary'>
// 					<h2 className='order__total'>Totalt värde: {total} sek</h2>
// 				</section>
// 				<Button text='Skicka order' />;
// 			</section>
// 		</section>
// 	);
// };

// export default OrderPage;

// pages/OrderPage/OrderPage.jsx
