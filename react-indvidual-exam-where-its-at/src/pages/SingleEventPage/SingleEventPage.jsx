import Button from '../../components/button/Button';
import PriceSelector from '../../components/price-selector/PriceSelector';
import './singleEventPage.css';

const SingleEventPage = () => {
	return (
		<section className='page'>
			<header className='header'>
				<h1 className='header__title'>Events</h1>
				<h2 className='header__sub-title'>You are about to score some tickets to</h2>
			</header>
			<section className='single-event-page__wrapper'>
				<section className='event'>
					<h3 className='event__title'>Nazze-Görings</h3>
					<h4 className='event__date'>21 mars kl 19-21</h4>
					<p className='event__venue'>@ Kjell Härnkvirksgkslkrj</p>
				</section>
				<PriceSelector />
				<Button text='Lägg i varukorgen' /> {/* ADDERA ON-CLICK SEN????*/}
			</section>
		</section>
	);
};

export default SingleEventPage;
