import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
	return (
		<footer className='footer'>
			<nav className='nav'>
				<Link to='/events' className='nav__link'>
					<FontAwesomeIcon className='nav__icon' icon={faCalendar} style={{ color: 'white' }} />
					<p className='nav__text'>EVENTS</p>
				</Link>
				<Link to='/my-tickets' className='nav__link'>
					<FontAwesomeIcon className='nav__icon' icon={faTicketSimple} style={{ color: 'white' }} />
					<p className='nav__text'>MY TICKETS</p>
				</Link>
			</nav>
		</footer>
	);
};

export default Menu;
