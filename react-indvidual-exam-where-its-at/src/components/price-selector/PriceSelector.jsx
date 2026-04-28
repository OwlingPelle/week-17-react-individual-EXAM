import './priceSelector.css';

const PriceSelector = () => {
	return (
		<section className='price-selector'>
			<p className='price-selector__total'>1050 SEK</p>

			<section className='price-selector__controls'>
				<button className='price-selector__btn price-selector__btn--minus'>-</button>
				<span className='price-selector__quantity'>3</span>
				<button className='price-selector__btn price-selector__btn--plus'>+</button>
			</section>
		</section>
	);
};

export default PriceSelector;
