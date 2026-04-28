import './eventsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const EventsPage = () => {
	return (
		<section className='page'>
			<header className='header'>
				<h1 className='header__title'>Events</h1>

				<div className='search-wrapper'>
					<FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
					<input type='search' className='searchbar' />
				</div>
			</header>

			<section className='event__list'>
				<section className='event__item'>
					<section className='event__date-container'>
						<p className='event__day'>21</p>
						<p className='event__month'>MAR</p>
					</section>
					<section className='event__details'>
						<h2 className='event__title'>Lasse-Stefanz</h2>
						<p className='event__venue'>Kjell Härnqvistsalen</p>
						<section className='row'>
							<span className='event__time'>19.00 - 21.00</span>
							<span className='event__price'>350 SEK</span>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default EventsPage;
