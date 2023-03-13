import { TbMessageCircle } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import './buttons.css'

const Buttons = () => {
    const location = useLocation();

    const handleContactClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='buttons'>
            <button className='insta-btn' onClick={(event) => {
                if (!window.confirm('¿Quieres acceder a Instagram?')) {
                    event.preventDefault();
                }
            }}>
                <a target='_blank' href='https://www.instagram.com/puzzle_madrid/'><img src='/assets/iconoInstagram2.png' alt='ig' /></a>
            </button>
            <Link to={{ pathname: '/contact', hash: '#top' }} onClick={handleContactClick}>
                <button className='contact-btn'>
                    <TbMessageCircle />
                    <span className='font-atlas'>contacta</span>
                </button>
            </Link>
        </div>
    )
}

export default Buttons