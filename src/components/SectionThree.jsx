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
            <div id='box3' ref={ref}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={ inView ? animationOptions : {} }
                >& FUN</motion.h1>
            </div>
            <img id='img7' src='/src/assets/foto11.webp' alt='foto7' />
            <video src='/src/assets/video1.mp4' loop muted autoPlay className=' h-[250px]'/>
            <img id='img8' src='/src/assets/foto17.webp' alt='foto8' />
        </section>
    )
}

export default SectionTwo