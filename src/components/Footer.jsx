import { Link, useLocation } from 'react-router-dom';
import './footer.css';
import { MdLocationOn, MdOutlinePhoneAndroid } from 'react-icons/md';
import { BiLike } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {

    const location = useLocation();

    const handleContactClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <section id='footer' className='footer'>
            <main className='footer-info'>
                <div className='footer-text-box'>
                    <h3>UBICACIÓN<MdLocationOn /></h3>
                    <div>
                    <a target='_blank' href='https://www.google.com/maps/place/C.+de+Blasco+de+Garay,+10,+28015+Madrid/@40.4308809,-3.7114436,17z/data=!3m1!4b1!4m6!3m5!1s0xd422867afd8e417:0x2e754708b08047e8!8m2!3d40.4308809!4d-3.7114436!16s%2Fg%2F11bw43_fmx'><p>Blasco de Garay 10, 28015<br/>
                        Madrid</p></a>
                    </div>
                </div>
                <div className='footer-text-box'>
                    <h3>HORARIO<FaRegClock /></h3>
                    <div>
                        <p>Martes a sábado:</p>
                        <p>- mediodías: 13:30-15:30</p>
                        <p>- noches: 20:30-23:00</p>
                        <p>Domingo y lunes:</p>
                        <p>- cerrados</p>
                    </div>
                </div>
                <div className='footer-text-box'>
                    <h3>TELÉFONO<MdOutlinePhoneAndroid /></h3>
                    <div>
                        <p>+34 698136700</p>
                    </div>
                </div>
                <div className='footer-text-box'>
                    <h3>SOCIAL<BiLike /></h3>
                    <div>
                        <a target='_blank' href='https://www.instagram.com/puzzle_madrid/' >Instagram<GrInstagram className='text-xl'/></a>
                    </div>
                </div>
            </main>

            <ul className='legal-text'>
                <div className='legal-text-links'>
                    <Link to={{pathname:'/legal', hash:'#top'}} onClick={handleContactClick}><li>Aviso legal</li></Link>
                    <Link to={{pathname:'/privacity', hash:'#top'}} onClick={handleContactClick}><li>Política de privacidad</li></Link>
                    <Link to={{pathname:'/cookies', hash:'#top'}} onClick={handleContactClick}><li>Política de Cookies</li></Link>
                </div>
                <p>developed by <a target='_blank' href='https://personal-virtualfolio.netlify.app/#portfolio'>davidFC</a></p>
            </ul>

        </section>
    )
    }

export default Footer