import { TbMessageCircle } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import './contact.css'

const Contact = () => {
    const location = useLocation();

    const handleContactClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='contact'>
            <Link to={{ pathname: '/contact', hash: '#top' }} onClick={handleContactClick}>
                <button className='btn-contact'>
                    <TbMessageCircle />
                    <span className='font-atlas'>contacta</span>
                </button>
            </Link>
        </div>
    )
}

export default Contact