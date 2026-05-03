import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faTicketSimple, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './menu.css';
import { useCartStore } from '../../stores/useCartStore';
import Cart from '../Cart/Cart';

const Menu = () => {
	const cart = useCartStore((state) => state.cart);

	return (
		<footer className='footer'>
			<nav className='nav'>
				<Link to='/events' className='nav__link'>
					<FontAwesomeIcon className='nav__icon' icon={faCalendar} style={{ color: 'white' }} />
					<p className='nav__text'>EVENTS</p>
				</Link>
				<Link to='/my-tickets' className='nav__link'>
					<FontAwesomeIcon className='nav__icon' icon={faTicketSimple} style={{ color: 'white' }} />
					<p className='nav__text'>MINA BILJETTER</p>
				</Link>
				<Link to='/cart' className='nav__link'>
					<FontAwesomeIcon className='nav__icon' icon={faCartShopping} style={{ color: 'white' }} />
					<div className='nav__cartCounter' id='cartCountContainer'>
						<p className='nav__cartCountNumber' id='cartCount'>
							{cart.reduce((acc, event) => acc + event.qty, 0)}
						</p>
					</div>
					<p className='nav__text'>KUNDVAGN</p>
				</Link>
			</nav>
		</footer>
	);
};

export default Menu;
