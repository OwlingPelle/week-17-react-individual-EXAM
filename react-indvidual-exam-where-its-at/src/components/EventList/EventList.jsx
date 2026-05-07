import { motion } from 'framer-motion';
import EventItem from '../EventItem/EventItem';

const EventList = ({ events }) => {
	return (
		<section className='event__item'>
			{events.map((event, index) => (
				<motion.div
					key={event.id}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.4,
						delay: index * 0.07,
						ease: 'easeOut',
					}}
				>
					<EventItem event={event} />
				</motion.div>
			))}
		</section>
	);
};

export default EventList;
