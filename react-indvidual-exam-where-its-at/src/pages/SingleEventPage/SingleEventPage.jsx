import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import PriceSelector from '../../components/PriceSelector/PriceSelector';
import './singleEventPage.css';
import { useFetchEvents } from '../../hooks/useFetchEvents';
import { useParams } from 'react-router-dom';

const SingleEventPage = () => {
	const [activeEvent, setActiveEvent] = useState(null);
	const { events, isLoading, isError } = useFetchEvents();
	const { id } = useParams();

	useEffect(() => {
		if (id && events.length > 0) {
			const event = events.find((e) => e.id === id);
			setActiveEvent(event);
			console.log(event);
		}
	}, [id, events]);

	if (isLoading) return <p className='page-msg'>Loading ⏳</p>;
	if (isError) return <p className='page-msg'>Something went wrong 😬</p>;
	if (!activeEvent) return <p className='page-msg'>No event found 🧐</p>;
	console.log('PriceSelector event:', activeEvent);

	// 1. tillståndsvariabel aktuellt event.
	// 2. hämta alla event med useFetch.
	// 3. hämta id med useParams
	// 4. när jag har både id och events - leta reda på korrekt event och sätt aktuellt event med tillståndsvariabel (array: if jag har en aktuell bok skicka ut , amnars tomma fnuttar'' ternary...)
	// if (activeEvent) {
	return (
		<section className='page'>
			<header className='header'>
				<h1 className='header__title'>Events</h1>
				<h2 className='header__sub-title'>You are about to score some tickets to</h2>
			</header>
			<section className='single-event-page__wrapper'>
				<section className='event'>
					<h3 className='event__title'>{activeEvent.name}</h3>
					<h4 className='event__date'>
						{activeEvent.when.date.toLowerCase()} kl {activeEvent.when.from}-{activeEvent.when.to}
					</h4>
					<p className='event__venue'>{activeEvent.name}</p>
				</section>
				<PriceSelector activeEvent={activeEvent} />
				<Button text='Lägg i varukorgen' /> {/* ADDERA ON-CLICK SEN????*/}
			</section>
		</section>
	);
	// }
};

export default SingleEventPage;
