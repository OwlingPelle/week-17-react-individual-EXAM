import { useEffect, useState } from 'react';
import './counter.css';
import { useCartStore } from '../../stores/useCartStore';

const Counter = ({ activeEvent, qty, setQty }) => {
	return (
		<section className='price-selector'>
			<p className='price-selector__total'>{activeEvent.price * qty} SEK</p>

			<section className='price-selector__controls'>
				<button
					className='price-selector__btn price-selector__btn--minus'
					onClick={() => {
						if (qty > 0) {
							setQty(qty - 1);
						}
					}}
				>
					-
				</button>

				<span className='price-selector__quantity'>{qty}</span>

				<button
					className='price-selector__btn price-selector__btn--plus'
					onClick={() => {
						setQty(qty + 1);
					}}
				>
					+
				</button>
			</section>
		</section>
	);
};

export default Counter;
