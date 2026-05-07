import './eventsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import EventItem from '../../components/EventItem/EventItem';
import { useFetchEvents } from '../../hooks/useFetchEvents';
import EventList from '../../components/EventList/EventList';
import { useEffect } from 'react';
import { Input } from '@mantine/core';

const EventsPage = () => {
	const { events, isLoading, isError } = useFetchEvents();

	useEffect(() => {
		console.log(events);
	}, [events]);

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Something went wrong...</p>;

	return (
		<section className='page'>
			<header className='header'>
				<h1 className='header__title'>Events</h1>
				<Input placeholder='Search events...' variant='filled' radius='lg' className='searchbar' />
			</header>
			<EventList events={events} />
		</section>
	);
};

export default EventsPage;
