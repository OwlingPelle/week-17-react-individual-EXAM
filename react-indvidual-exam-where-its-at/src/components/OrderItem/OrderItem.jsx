const OrderItem = ({ event, decrease, increase, value }) => {
	return (
		<section className='order-item'>
			<section className='order-item__top'>
				<section className='event'>
					<h3 className='event__title'>{event.name}</h3>
					<h4 className='event__date'>{event.when.date.from.to}</h4>
				</section>
			</section>

			<section className='price-selector__controls'>
				<button className='price-selector__btn price-selector__btn--minus' onClick={decrease}>
					-
				</button>
				<span className='price-selector__quantity'>{value}</span>
				<button className='price-selector__btn price-selector__btn--plus' onClick={increase}>
					+
				</button>
			</section>
		</section>
	);
};

export default OrderItem;

// export const Counter = ({ event, decrease, increase, value, inCart = false }) => {
// 	return (
// 		<section className='counter'>
// 			<article className='counter__top'>{inCart ? <EventInfo event={event} hideVenue={true} /> : <h2 className='counter__price'>{event.price * value}</h2>}</article>
// 			<section className='counter__footer'>
// 				<Button className='counter__btn' onClick={decrease} text='-' />
// 				<h3 className='counter__qty'>{value}</h3>
// 				<Button className='counter__btn' onClick={increase} text='+' />
// 			</section>
// 		</section>
// 	);
// };
