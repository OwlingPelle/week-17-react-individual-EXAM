import Button from '../../components/button/Button';
import PriceSelector from '../../components/price-selector/PriceSelector';
import './orderPage.css';

const OrderPage = () => {
	return (
		<section className='page'>
			<header className='header'>
				<h1 className='header__title'>Order</h1>
			</header>
			<section className='single-event-page__wrapper'>
				<PriceSelector />
				<Button text='Skicka order' />
				{/* ADDERA ON-CLICK SEN????*/}
			</section>
		</section>
	);
};

export default OrderPage;
