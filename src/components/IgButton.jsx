import '../styles/igButton.css';

const IgButton = () => {
	return (
		<div className='ig-btn'>
		<img src='/public/assets/logotipo-solete-HORIZONTAL.png' alt='logo' className='w-20 bg-white rounded-md'/>
			{/* <button
				className='insta-btn'
				onClick={event => {
					if (!window.confirm('¿Quieres acceder a Instagram?')) {
						event.preventDefault();
					}
				}}
			>
				<a target='_blank' href='https://www.instagram.com/puzzle_madrid/'>
					<img src='/assets/iconoInstagram.png' alt='ig' />
				</a>
			</button> */}
		</div>
	);
};

export default IgButton;
