import '../styles/hero.css';
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

    const animationOptions = {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    };

    const [ ref, inView ] = useInView({ threshold: 0.5, triggerOnce: true});

    return (
        <section className='hero'>
            <div className='logo-container' ref={ref}>
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={ inView ? animationOptions : {} }
                    src='/assets/logoPuzzleBlanco.png' alt='logo' 
                    />
                <a href='#gallery' className='arrow-container'>
                    <UseAnimations animation={arrowDown} size={56} strokeColor='white'/>
                </a>
            </div>
        </section>
    )
}

export default Hero