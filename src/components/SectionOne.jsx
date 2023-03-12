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
                    <img id='img1' src='/assets/foto9.webp' alt='foto1' />
                </div>
                <div className='container-1B'>
                    <div id='box1B'>
                        <video src='/assets/video2.mp4' muted loop autoPlay className='w-[100%]'/>
                        <div className='logo-container'>
                            <img src='/assets/stickerRed.png' alt='logoRed' />
                        </div>
                    </div>
                    <img id='img2' src='/assets/foto10.webp' alt='foto3' />
                </div>
            </section>
    )
}

export default MultiOne