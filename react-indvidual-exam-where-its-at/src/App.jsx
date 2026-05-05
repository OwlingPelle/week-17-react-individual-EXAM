import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import EventsPage from './pages/EventsPage/EventsPage';
import SingleEventPage from './pages/SingleEventPage/SingleEventPage';
import OrderPage from './pages/OrderPage/OrderPage';
import TicketsPage from './pages/TicketsPage/TicketsPage';
import Menu from './components/menu/Menu';
import Layout from './components/layout/Layout';

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
			<RouterProvider router={router} />
			<div className='bottom-distance'></div>
		</section>
	);
}

export default App;

// {
// 	path: '/',
// 	element: <LoadingPage />,
// },
// {
// 	path: '/events',
// 	element: <EventsPage />,
// },
// {
// 	path: '/single-event',
// 	element: <SingleEventPage />,
// },
// {
// 	path: '/order',
// 	element: <OrderPage />,
// },
// {
// 	path: '/tickets',
// 	element: <TicketsPage />,
// },
