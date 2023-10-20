import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
	const handleContactClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<nav className='navbar'>
			<ul className='navbar-list'>
				<a href='#' className='navbar-list-element active'>
					<li>HOME</li>
				</a>
				<Link
					to={{ pathname: '/booking', hash: '#top' }}
					className='navbar-list-element'
					onClick={handleContactClick()}
				>
					<li>RESERVAS</li>
				</Link>
				<Link
					to={{ pathname: '/contact', hash: '#top' }}
					className='navbar-list-element'
					onClick={handleContactClick()}
				>
					<li>CONTACTO</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
