import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './sectionTwo.css';

const SectionTwo = () => {
	const animationOptions = {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2 },
	};

	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

	return (
		<section className='image-container-2'>
			<div className='container-2A'>
				<img id='img5' src='/assets/fotoEclair.webp' alt='foto5' />
				<img id='img6' src='/assets/fotoLocal5.webp' alt='foto6' />
			</div>
			<div className='container-2B'>
				<div id='box2' ref={ref}>
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						animate={inView ? animationOptions : {}}
					>
						WINE,
					</motion.h1>
				</div>
				<img id='img7' src='/assets/fotoPoster.webp' alt='foto7' />
			</div>
		</section>
	);
};

export default SectionTwo;
