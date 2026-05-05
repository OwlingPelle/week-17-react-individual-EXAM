import './ticketItem.css';

const TicketItem = ({ ticket }) => {
	return (
		<article className='ticket'>
			<section className='ticket__section'>
				<p className='ticket__label'>VAD</p>
				<h1 className='ticket__text--title'>{ticket.name}</h1>
			</section>

			<section className='ticket__section ticket__section--grey-one'>
				<p className='ticket__label'>VAR</p>
				<p className='ticket__text'>{ticket.location}</p>
			</section>

			<section className='ticket__section ticket__section--grey-two'>
				<section className='ticket__when'>
					<p className='ticket__label'>NÄR</p>
					<p className='ticket__text'>{ticket.date.split(' ')[0] + ' ' + ticket.date.split(' ')[1].slice(0, 3)}</p>
				</section>
				<section className='ticket__from'>
					<p className='ticket__label'>FRÅN</p>
					<p className='ticket__text'>{ticket.start}</p>
				</section>
				<section className='ticket__to'>
					<p className='ticket__label'>TILL</p>
					<p className='ticket__text'>{ticket.end}</p>
				</section>
			</section>

			<section className='ticket__section ticket__section--grey-three'>
				<p className='ticket__label'>INFO</p>
				<p className='ticket__text ticket__text--tiny'>
					Sektion {ticket.section} – sittplats {ticket.seat}
				</p>
			</section>

			<div className='ticket__barcode-section ticket__section--grey-four'>
				<p className='ticket__barcode'>{ticket.barcode}</p>
				<p className='ticket__id'>{ticket.ticketId}</p>
			</div>
		</article>
	);
};

export default TicketItem;
