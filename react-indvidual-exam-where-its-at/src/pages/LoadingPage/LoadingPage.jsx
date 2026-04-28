import React from 'react';
import './loadingPage.css';
import logo from '../../assets/logo.svg';

const LoadingPage = () => {
	return (
		<section className='page'>
			<section className='start'>
				<img src={logo} alt='App logotype' className='start__logo' />
				<h1 className='start__title'>Where it's @</h1>
				<h3 className='start__sub-title'>Ticketing made easy</h3>
			</section>
		</section>
	);
};

export default LoadingPage;
