import './sectionOne.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MultiOne = () => {

    const animationOptions = {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    };

    const [ ref, inView ] = useInView({ threshold: 0.5, triggerOnce: true});


    return (
            <section className='image-container-1'>
            <div className='container-1A'>
                    <div id='box1A' ref={ref}>
                        <motion.h1 
                            initial={{ opacity: 0, y: 50 }}
                            animate={ inView ? animationOptions : {} }
                        >FOOD,</motion.h1>
                    </div>
                    <video id='vid1' src='/assets/video1.mp4' muted loop autoPlay />
                </div>
                <div className='container-1B'>
                    <div id='box1B'>
                        <img id='img1' src='/assets/foto16.webp' alt='foto1' />
                        <img id='img2' src='/assets/logoRedVertical.png' alt='logoRed' />
                    </div>
                    <img id='img3' src='/assets/foto10.webp' alt='foto3' />
                </div>
            </section>
    )
}

export default MultiOne