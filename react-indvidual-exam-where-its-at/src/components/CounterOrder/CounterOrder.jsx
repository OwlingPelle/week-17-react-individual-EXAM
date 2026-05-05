import './counterOrder.css';

const CounterOrder = ({ item, qty, onIncrease, onDecrease }) => {
	console.log('ITEM:', item);

	return (
		<section className='price-selector'>
			<h2 className='price-selector__name'>{item.name}</h2>
			<section className='price-selector__date'>
				{item.date.toLowerCase()} kl {item.start}-{item.end}
			</section>

			<section className='price-selector__controls'>
				<button className='price-selector__btn price-selector__btn--minus' onClick={onDecrease}>
					-
				</button>

				<span className='price-selector__quantity'>{qty}</span>

				<button className='price-selector__btn price-selector__btn--plus' onClick={onIncrease}>
					+
				</button>
			</section>
		</section>
	);
};

export default CounterOrder;

// import './counterOrder.css';

// const Counter = ({ qty, onIncrease, onDecrease }) => {
// 	return (
// 		<section className='counter'>
// 			<button className='counter__btn' onClick={onDecrease}>
// 				-
// 			</button>
// 			<span className='counter__value'>{qty}</span>
// 			<button className='counter__btn' onClick={onIncrease}>
// 				+
// 			</button>
// 		</section>
// 	);
// };

// export default Counter;

// import { useEffect, useState } from 'react';
// import { useCartStore } from '../../stores/useCartStore';
