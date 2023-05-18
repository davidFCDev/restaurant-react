import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { MdLocationOn, MdOutlinePhoneAndroid } from 'react-icons/md';
import { BiLike } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
	const handleContactClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<section id='footer' className='footer'>
			<main className='footer-info'>
				<div className='footer-text-box'>
					<h3>
						UBICACIÓN
						<MdLocationOn className='mb-1' />
					</h3>
					<div>
						<a
							target='_blank'
							href='https://www.google.com/maps/place/C.+de+Blasco+de+Garay,+10,+28015+Madrid/@40.4308809,-3.7114436,17z/data=!3m1!4b1!4m6!3m5!1s0xd422867afd8e417:0x2e754708b08047e8!8m2!3d40.4308809!4d-3.7114436!16s%2Fg%2F11bw43_fmx'
							onClick={event => {
								if (!window.confirm('¿Quieres acceder a Ubicación?')) {
									event.preventDefault();
								} else {
									handleContactClick();
								}
							}}
						>
							<p>
								Blasco de Garay 10, <br />
								28015 Madrid
							</p>
						</a>
					</div>
				</div>
				<div className='footer-text-box'>
					<h3>
						HORARIO
						<FaRegClock className='mb-1' />
					</h3>
					<div>
						<p>Martes a jueves:</p>
						<p>- 19:30 a 00:00</p>
						<p>Viernes y sábado:</p>
						<p>- 13:30 a 15:30</p>
						<p>- 20:30 a 00:00</p>
						<p>Domingos y lunes cerrados</p>

					</div>
				</div>
				<div className='footer-text-box'>
					<h3>
						TELÉFONO
						<MdOutlinePhoneAndroid className='mb-1' />
					</h3>
					<div>
						<p>+34 912960896</p>
					</div>
				</div>
				<div className='footer-text-box'>
					<h3>
						SOCIAL
						<BiLike className='mb-1' />
					</h3>
					<div>
						<a
							target='_blank'
							href='https://www.instagram.com/puzzle_madrid/'
							onClick={event => {
								if (!window.confirm('¿Quieres acceder a Instagram?')) {
									event.preventDefault();
								} else {
									handleContactClick();
								}
							}}
						>
							Instagram
							<GrInstagram className='text-l md:text-xl' />
						</a>
					</div>
				</div>
			</main>

			<ul className='legal-text'>
				<div className='legal-text-links'>
					<Link
						to={{ pathname: '/legal', hash: '#top' }}
						onClick={event => {
							if (!window.confirm('¿Quieres acceder a Aviso legal?')) {
								event.preventDefault();
							} else {
								handleContactClick();
							}
						}}
					>
						<li>Aviso legal</li>
					</Link>
					<Link
						to={{ pathname: '/privacity', hash: '#top' }}
						onClick={event => {
							if (
								!window.confirm('¿Quieres acceder a la Política de privacidad?')
							) {
								event.preventDefault();
							} else {
								handleContactClick();
							}
						}}
					>
						<li>Política de privacidad</li>
					</Link>
					<Link
						to={{ pathname: '/cookies', hash: '#top' }}
						onClick={event => {
							if (
								!window.confirm('¿Quieres acceder a la Política de cookies?')
							) {
								event.preventDefault();
							} else {
								handleContactClick();
							}
						}}
					>
						<li>Política de Cookies</li>
					</Link>
				</div>
				<p id='portfolio'>
					developed by{' '}
					<a
						target='_blank'
						href='https://personal-virtualfolio.netlify.app/#portfolio'
					>
						davidFC
					</a>
				</p>
			</ul>
		</section>
	);
};

export default Footer;
