import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faTicketSimple, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './menu.css';
import { useCartStore } from '../../stores/useCartStore';
import Cart from '../Cart/Cart';

const Menu = () => {
	const cart = useCartStore((state) => state.cart);
	const tickets = useCartStore((state) => state.tickets);

	const cartQty = cart.reduce((acc, e) => acc + e.qty, 0);

	return (
		<footer className='footer'>
			<nav className='nav'>
				<Link to='/events' className='nav__link'>
					<FontAwesomeIcon className='nav__icon' icon={faCalendar} style={{ color: 'white' }} />
					<p className='nav__text'>EVENTS</p>
				</Link>

				<Link to='/tickets' className='nav__link'>
					<FontAwesomeIcon className='nav__icon' icon={faTicketSimple} style={{ color: 'white' }} />

					{tickets.length > 0 && (
						<div className='nav__cartCounter navcartCounter--ticketCounter'>
							<p className='nav__cartCountNumber'>{tickets.length}</p>
						</div>
					)}

					<p className='nav__text'>BILJETTER</p>
				</Link>

				<Link to='/cart' className='nav__link'>
					<FontAwesomeIcon className='nav__icon' icon={faCartShopping} style={{ color: 'white' }} />

					{cartQty > 0 && (
						<div className='nav__cartCounter'>
							<p className='nav__cartCountNumber'>{cartQty}</p>
						</div>
					)}

					<p className='nav__text'>KUNDVAGN</p>
				</Link>
			</nav>
		</footer>
	);
};

export default Menu;
