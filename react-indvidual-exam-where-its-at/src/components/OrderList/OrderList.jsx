import OrderItem from '../OrderItem/OrderItem';

const OrderList = ({ cart, increaseQty, decreaseQty }) => {
	return (
		<section className='order-list'>
			{cart.map((item) => (
				<OrderItem key={item.id} item={item} onIncrease={() => increaseQty(item.id)} onDecrease={() => decreaseQty(item.id)} />
			))}
		</section>
	);
};

export default OrderList;
