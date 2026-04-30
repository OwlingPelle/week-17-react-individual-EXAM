import EventItem from '../EventItem/EventItem';
import './eventList.css';

const EventList = ({ events }) => {
	return (
		<section className='movie-list'>
			{events.map((event) => (
				<EventItem key={event.id} event={event} />
			))}
		</section>
	);
};

export default EventList;
