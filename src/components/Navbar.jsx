import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

	const handleContactClick = () => {
		window.scrollTo(0, 0);
	};
    
	return (
		<nav className='navbar'>
			<ul className='navbar-list'>
				<a href='#'>
					<li className='navbar-list-element active'>HOME</li>
				</a>
				<a
					href='https://reservation.dish.co/landingPage/hydra-e41479bd-b9c5-4a2a-9252-870ba363dc5c'
					onClick={event => {
						if (!window.confirm('¿Quieres acceder a Reservas?')) {
							event.preventDefault();
						}
					}}
				>
					<li className='navbar-list-element'>RESERVAS</li>
				</a>
				<Link
					to={{ pathname: '/contact', hash: '#top' }}
					onClick={event => {
						if (!window.confirm('¿Quieres acceder a Contacto?')) {
							event.preventDefault();
						} else {
							handleContactClick();
						}
					}}
				>
					<li className='navbar-list-element'>CONTACTO</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
