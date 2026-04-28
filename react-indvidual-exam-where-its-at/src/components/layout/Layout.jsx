import { Outlet } from 'react-router-dom';
import Menu from '../menu/Menu';

const Layout = () => {
	return (
		<>
			<main className='main'>
				<Outlet />
			</main>
			<Menu />
		</>
	);
};

export default Layout;
