import './ubicationButton.css';
import { MdLocationOn } from 'react-icons/md'

const UbicationButton = () => {

    return (
        <div>
            <button className='ubi-btn'>
                <a href='#footer'><MdLocationOn /></a>
            </button>
        </div>
    )
}

export default UbicationButton