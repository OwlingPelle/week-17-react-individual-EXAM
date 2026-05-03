import { useEffect, useState } from 'react';
import './priceSelector.css';
import { useCartStore } from '../../stores/useCartStore';
// import Counter from '../../hooks/useCounter';

const PriceSelector = ({ activeEvent }) => {
	const [count, setCount] = useState(0);
	const { cart, addToCart, removeFromCart } = useCartStore();

	useEffect(() => {
		const cartItem = cart.find((e) => e.id === activeEvent.id);
		if (cartItem) setCount(cartItem.qty);
	}, [cart]);

	function decreaseCount() {
		if (count > 0) setCount((prev) => prev - 1);
		// console.log('decrease');
		removeFromCart(activeEvent.id);
	}

	const increaseCount = () => {
		setCount((prev) => prev + 1);
		// console.log('increase');
		addToCart(activeEvent);
		// increaseCart();
	};

	return (
		<section className='price-selector'>
			<p className='price-selector__total'>{activeEvent.price * count} SEK</p>

			<section className='price-selector__controls'>
				<button className='price-selector__btn price-selector__btn--minus' onClick={decreaseCount}>
					-
				</button>
				<span className='price-selector__quantity'>{count}</span>
				<button className='price-selector__btn price-selector__btn--plus' onClick={increaseCount}>
					+
				</button>
			</section>
		</section>
	);
};

export default PriceSelector;

// KONRADS::::::::
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

// NÅT ANNAT... JESPÅERS?

// const { events, isLoading, isError } = useFetchEvents();
// const [count, setCount] = useState(0);
// const { cart, addToCart, removeFromCart } = useCartStore();

// useEffect(() => {
// 	const cartItem = cart.find((e) => e.id === event.id);
// 	if (cartItem) setCount(cartItem.qty);
// }, [cart]);

// const decreaseCount = () => {
// 	if (count > 0) {
// 		setCount((c) => c - 1);
// 		removeFromCart(event.id);
// 	}
// };

// const increaseCount = () => {
// 	setCount((c) => c + 1);
// 	console.log('INCREASE');

// 	addToCart(event);
// };
