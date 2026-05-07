import CounterOrder from '../CounterOrder/CounterOrder';
import './orderItem.css';

const OrderItem = ({ item, onIncrease, onDecrease }) => {
	return (
		<article className='order-item'>
			<CounterOrder item={item} qty={item.qty} onIncrease={() => onIncrease(item.id)} onDecrease={() => onDecrease(item.id)} />
		</article>
	);
};

export default OrderItem;
