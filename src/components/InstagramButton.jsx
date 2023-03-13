import './instagramButton.css';

const InstagramButton = () => {

    return (
        <div>
            <button className='ubi-btn' onClick={(event) => {
                if (!window.confirm('¿Quieres acceder a Instagram?')) {
                    event.preventDefault();
                }
            }}>
                <a target='_blank' href='https://www.instagram.com/puzzle_madrid/'><img src='/assets/iconoInstagram2.png' alt='ig' /></a>
            </button>
        </div>
    )
}

export default InstagramButton