import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import EventsPage from './pages/EventsPage/EventsPage';
import SingleEventPage from './pages/SingleEventPage/SingleEventPage';
import OrderPage from './pages/OrderPage/OrderPage';
import TicketsPage from './pages/TicketsPage/TicketsPage';
import Menu from './components/menu/Menu';
import Layout from './components/layout/Layout';
import toast, { Toaster } from 'react-hot-toast';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <LoadingPage />,
				},
				{
					path: 'events',
					element: <EventsPage />,
				},
				{
					path: 'events/:id',
					element: <SingleEventPage />,
				},
				{
					path: 'cart',
					element: <OrderPage />,
				},
				{
					path: 'tickets',
					element: <TicketsPage />,
				},
			],
		},
	]);

	return (
		<section className='app'>
			<Toaster
				position='top-center'
				toastOptions={{
					duration: 1500,
					style: {
						background: 'rgba(255, 255, 255, 0.5)',
						backdropFilter: 'blur(8px)',
						fontFamily: 'Fira Sans',
						fontSize: '1rem',
						color: 'black',
						boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
					},
					success: {
						style: {
							background: 'green',
						},
					},
				}}
			/>

			<RouterProvider router={router} />
			<div className='bottom-distance'></div>
		</section>
	);
}

export default App;
