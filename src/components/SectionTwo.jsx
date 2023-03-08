import './sectionTwo.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionTwo = () => {

    const animationOptions = {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    };

    const [ ref, inView ] = useInView({ threshold: 0.5, triggerOnce: true});

    return (
        <section className='image-container-2'>
            <img id='img4' src='/src/assets/foto12.webp' alt='foto4' />
            <img id='img5' src='/src/assets/foto16.webp' alt='foto5' />
            <img id='img6' src='/src/assets/foto5.webp' alt='foto6' />
            <div id='box2' ref={ref}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={ inView ? animationOptions : {} }
                >WINE,</motion.h1>
            </div>
        </section>
    )
}

export default SectionTwo