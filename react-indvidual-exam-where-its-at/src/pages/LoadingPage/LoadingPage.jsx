import React, { useEffect } from 'react';
import './loadingPage.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

/* här fick jag hjälp av ai med timer/navigation*/

export default function LoadingPage() {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/events');
		}, 2000); // 3 sekunder

		return () => clearTimeout(timer); // cleanup om sidan avbryts
	}, [navigate]);

	return (
		<section className='page'>
			<section className='start'>
				<img src={logo} alt='App logotype' className='start__logo' />
				<h1 className='start__title'>Where it's @</h1>
				<h3 className='start__sub-title'>Ticketing made easy</h3>
			</section>
		</section>
	);
}

// export default LoadingPage;
