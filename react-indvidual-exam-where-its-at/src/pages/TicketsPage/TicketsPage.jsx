import './ticketsPage.css';
import { v4 as uuidv4 } from 'uuid';
import { useCartStore } from '../../stores/useCartStore';
import TicketItem from '../../components/TicketItem/TicketItem';
import { motion } from 'framer-motion';

const TicketsPage = () => {
	const { tickets } = useCartStore();

	if (tickets.length === 0) {
		return (
			<section className='page page--gradient'>
				<p className='page-msg'>Här hittar du dina biljetter efter genomfört köp.</p>
			</section>
		);
	}
	return (
		<section className='page page--gradient'>
			<section className='el-gradiento'>
				{tickets.map((ticket, index) => (
					<motion.div
						key={ticket.id}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.4,
							delay: index * 0.03,
							ease: 'easeOut',
						}}
					>
						<TicketItem ticket={ticket} />
					</motion.div>
				))}
			</section>

			<div className='bottom-distance'></div>
		</section>
	);
};

export default TicketsPage;
