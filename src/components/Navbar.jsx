import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const location = useLocation();

    const handleContactClick = () => {
        window.scrollTo(0, 0);
    }
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <a href='#'><li className='navbar-list-element active'>HOME</li></a>
                <Link to={'/'} onClick={(event) => {
                    if (!window.confirm('¿Quieres acceder a Reservas?')) {
                            event.preventDefault();
                        }
                }}>
                    <li className='navbar-list-element'>RESERVAS</li>
                </Link>
                <Link 
                    to={{ pathname: '/contact', hash: '#top' }} 
                    onClick={(event) => {
                        if (!window.confirm('¿Quieres acceder a Contacto?')) {
                            event.preventDefault();
                        }
                        handleContactClick()
                    }}>
                    <li className='navbar-list-element'>CONTACTO</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar