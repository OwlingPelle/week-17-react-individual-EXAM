import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import OrderList from '../../components/OrderList/OrderList';
import Button from '../../components/Button/Button';
import { generateTickets } from '../../utils/generateTickets';
import './orderPage.css';
import toast, { Toaster } from 'react-hot-toast';

const OrderPage = () => {
	const notify = () => toast('✅ Köpet är klart!');
	const navigate = useNavigate();
	const cartContent = useCartStore((state) => state.cart);
	const cartQty = cartContent.reduce((acc, e) => acc + e.qty, 0);

	const { cart, increaseQty, decreaseQty, setTickets, clearCart } = useCartStore();

	const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

	const handleOrder = () => {
		const generated = generateTickets(cart);

		setTickets(generated);

		clearCart();
		navigate('/tickets');
	};
	if (cartContent.length === 0) {
		return (
			<section className='page'>
				<header className='header'>
					<h1 className='header__title'>Order</h1>
				</header>
				<p className='page-msg'>
					Varukorgen är tom. <br />
				</p>
			</section>
		);
	}
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
					<Button
						text='Skicka order'
						onClick={() => {
							handleOrder();
							notify();
						}}
					/>
				</section>
			)}
		</section>
	);
};

export default OrderPage;
