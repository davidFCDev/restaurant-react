import '../styles/igButton.css';

const IgButton = () => {
	return (
		<div className='ig-btn'>
		<a href='https://www.guiarepsol.com/es/fichas/solete/puzzle-332370/' target='_blank' className='flex overflow-hidden rounded-md '>
			<img src='/assets/logotipo-solete-HORIZONTAL.png' alt='logo' className='w-20 md:w-28 bg-white rounded-md hover:scale-110 transition-all'/>
		</a>
			<button
				className='insta-btn '
				onClick={event => {
					if (!window.confirm('¿Quieres acceder a Instagram?')) {
						event.preventDefault();
					}
				}}
			>
				<a target='_blank' href='https://www.instagram.com/puzzle_madrid/'>
					<img src='/assets/iconoInstagram.png' alt='ig' />
				</a>
			</button>
		</div>
	);
};

export default IgButton;
