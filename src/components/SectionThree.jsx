import './sectionThree.css';
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
        <section className='image-container-3'>
            <div className='container-3A'>
                <div id='box3' ref={ref}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={ inView ? animationOptions : {} }
                    >& FUN</motion.h1>
                </div>
                <video id='vid2' src='/assets/video3.mp4' loop muted autoPlay />
            </div>
            <div className='container-3B'>
                <img id='img7' src='/assets/foto5.webp' alt='foto7' />
                <img id='img8' src='/assets/cartel1.jpg' alt='foto8' />
            </div>
        </section>
    )
}

export default SectionTwo