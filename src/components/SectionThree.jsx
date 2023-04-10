import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/sectionThree.css';

const SectionTwo = () => {
	const animationOptions = {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2 },
	};

	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

	return (
		<section className='image-container-3'>
			<div className='container-3A'>
				<div id='box3A' ref={ref}>
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						animate={inView ? animationOptions : {}}
					>
						& FUN
					</motion.h1>
				</div>
				<img id='img8' src='/assets/fotoLocal.webp' alt='foto8' />
			</div>
			<div className='container-3B'>
				<div id='box3B'>
					<img id='img9' src='/assets/fotoRamen.webp' alt='foto9' />
					<img id='img10' src='/assets/fotoDumpling.webp' alt='foto10' />
				</div>
				<img id='img11' src='/assets/fotoPasta.webp' alt='foto11' />
			</div>
		</section>
	);
};

export default SectionTwo;
