import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Counter from '../../components/Counter/Counter';
import './singleEventPage.css';
import { useFetchEvents } from '../../hooks/useFetchEvents';
import { useParams } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import Cart from '../../components/Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';

const SingleEventPage = () => {
	const notify = () => toast('✅ Biljetterna lades till i varukorgen!');
	const [activeEvent, setActiveEvent] = useState(null);
	const { events, isLoading, isError } = useFetchEvents();
	const { id } = useParams();
	// AI-hjälp...
	const [qty, setQty] = useState(0);
	const { addToCart } = useCartStore();
	//

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

	return (
		<section className='page'>
			<header className='header'>
				<h1 className='header__title'>Event</h1>
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
				<Counter activeEvent={activeEvent} qty={qty} setQty={setQty} />
				<Button
					onClick={() => {
						//lite ai-hjälp här
						addToCart({
							id: activeEvent.id,
							name: activeEvent.name,
							price: activeEvent.price,
							date: activeEvent.when.date,
							start: activeEvent.when.from,
							location: activeEvent.where,
							end: activeEvent.when.to,
							qty,
						});

						notify();

						console.log('TRYCKT!');
					}}
					text='Lägg i varukorgen'
				/>
			</section>
		</section>
	);
	// }
};

export default SingleEventPage;
