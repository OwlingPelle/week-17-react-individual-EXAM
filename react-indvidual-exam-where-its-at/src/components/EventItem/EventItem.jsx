import { Link } from 'react-router-dom';
import { useFetchEvents } from '../../hooks/useFetchEvents';
import './eventItem.css';

const EventItem = ({ event }) => {
	// const [day, month] = activeEvent.when.date.split(' ');
	// const shortMonth = month.slice(0, 3);
	return (
		<section className='event__list'>
			<Link className='event__link' to={`/events/${event.id}`}>
				<section className='event__item'>
					<section className='event__date-container'>
						{/* AI hjälp med split och slice... */}
						<p className='event__day'>{event.when.date.split(' ')[0]}</p>
						<p className='event__month'>{event.when.date.toUpperCase().split(' ')[1].slice(0, 3)}</p>
					</section>
					<section className='event__details'>
						<h2 className='event__title'>{event.name}</h2>
						<p className='event__venue'>{event.where}</p>
						<section className='row'>
							<span className='event__time'>
								{event.when.from}-{event.when.to}
							</span>
							<span className='event__price'>{event.price} SEK</span>
						</section>
					</section>
				</section>
			</Link>
		</section>
	);
};

export default EventItem;
