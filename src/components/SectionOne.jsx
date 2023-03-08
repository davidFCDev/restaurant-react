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
                <img id='img1' src='/assets/foto1.webp' alt='foto1' />
                <div id='box1-1' ref={ref}>
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        animate={ inView ? animationOptions : {} }
                    >FOOD,</motion.h1>
                </div>
                <div id='box1-2'>
                    <video src='/assets/video2.mp4' muted loop autoPlay className='w-[100%]'/>
                    <div className='logo-container'>
                        <img src='/assets/stickerRed.png' alt='logoRed' />
                    </div>
                </div>
                <img id='img2' src='/assets/foto18.webp' alt='foto2' />
                <img id='img3' src='/assets/foto8.webp' alt='foto3' />
            </section>
    )
}

export default MultiOne