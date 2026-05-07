import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../menu/Menu';

const Layout = () => {
	const location = useLocation();

	// Dölj menyn på loading page (index route "/")
	const hideMenu = location.pathname === '/';

	return (
		<>
			<main className='main'>
				<Outlet />
			</main>

			{!hideMenu && <Menu />}
		</>
	);
};

export default Layout;
