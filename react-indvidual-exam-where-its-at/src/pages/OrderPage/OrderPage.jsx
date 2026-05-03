import Button from '../../components/Button/Button';
// import OrderItem from '../../components/OrderItem/OrderItem';
import PriceSelector from '../../components/PriceSelector/PriceSelector';
import './orderPage.css';

const OrderPage = () => {
	return (
		<section className='page'>
			<header className='header'>
				<h1 className='header__title'>Order</h1>
			</header>
			<section className='single-event-page__wrapper'>
				{/* <OrderItem /> */}
				<Button text='Skicka order' />
				{/* ADDERA ON-CLICK SEN????*/}
			</section>
		</section>
	);
};

export default OrderPage;
