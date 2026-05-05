// components/OrderItem/OrderItem.jsx
import CounterOrder from '../CounterOrder/CounterOrder';
import './orderItem.css';

const OrderItem = ({ item, onIncrease, onDecrease }) => {
	return (
		<article className='order-item'>
			{/* <section className='price-selector__total'></section> */}

			<CounterOrder item={item} qty={item.qty} onIncrease={() => onIncrease(item.id)} onDecrease={() => onDecrease(item.id)} />

			{/* <p className='order-item__subtotal'>{item.price * item.qty} sek</p> */}
		</article>
	);
};

export default OrderItem;
