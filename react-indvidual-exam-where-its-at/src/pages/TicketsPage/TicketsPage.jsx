import './ticketsPage.css';
import { v4 as uuidv4 } from 'uuid';

import { useCartStore } from '../../stores/useCartStore';
import TicketItem from '../../components/TicketItem/TicketItem';

const TicketsPage = () => {
	const { tickets } = useCartStore();

	if (tickets.length === 0) {
		return (
			<section className='page page--gradient'>
				<p className='page-msg'>Du har inte köpt några biljetter än</p>
			</section>
		);
	}
	return (
		<section className='page page--gradient'>
			{tickets.map((ticket) => (
				<TicketItem key={ticket.ticketId} ticket={ticket} />
			))}
			<div className='bottom-distance'></div>
		</section>
	);
};

export default TicketsPage;
