import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/bookingPage.css';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';

const BookingPage = () => {
	return (
		<section className='booking-page'>
			<header className='header-contact'>
				<Link to={'/'}>
					<img src='/assets/logoPuzzle.png' alt='logo' className='img-logo' />
				</Link>
			</header>

			<main className='container'>
				<div className='flex flex-col w-full justify-center items-center'>
					<iframe
						id='restaurante-puzzle'
						title='Reservas'
						src='https://www.covermanager.com/reserve/module_restaurant/restaurante-puzzle/spanish'
						frameborder='0'
						height='550'
						width='100%'
						onload='iFrameResize();'
					></iframe>
				</div>
				<Toaster />
			</main>

			<Footer />
		</section>
	);
};

export default BookingPage;
