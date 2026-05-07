import './loadingPage.css';
import logo from '../../assets/logo.svg';
import loading from '../../assets/loading.svg';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* här fick jag hjälp av ai med timer/navigation och en del motion(duh)*/

const container = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

export default function LoadingPage() {
	const navigate = useNavigate();

	useEffect(() => {
		document.body.classList.add('no-menu');
		return () => document.body.classList.remove('no-menu');
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/events');
		}, 3000);

		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<section className='page'>
			<section className='start'>
				<motion.div variants={container} initial='hidden' animate='visible' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<motion.img variants={item} src={logo} alt='App logotype' className='start__logo' />

					<motion.h1 variants={item} className='start__title'>
						Where it's @
					</motion.h1>

					<motion.h3 variants={item} className='start__sub-title'>
						Ticketing made easy
					</motion.h3>

					<motion.img variants={item} src={loading} alt='Loading animation' className='start__loading' />
				</motion.div>
			</section>
		</section>
	);
}
