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
            <div className='container-2A'>
                <img id='img3' src='/assets/foto12.webp' alt='foto4' />
                <img id='img4' src='/assets/foto17.webp' alt='foto5' />
            </div>
            <div className='container-2B'>
                <img id='img5' src='/assets/foto5.webp' alt='foto6' />
                <div id='box2' ref={ref}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={ inView ? animationOptions : {} }
                    >WINE,</motion.h1>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo