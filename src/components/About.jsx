import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './about.css';

const About = () => {

    const animationOptions1 = {
        opacity: 1,
        x: 0,
        transition: { duration: 1.5 }
    };
    const animationOptions2 = {
        opacity: 1,
        x: 0,
        transition: { duration: 1.5 }
    };

    const [ ref1, inView1 ] = useInView({ threshold: 0.5, triggerOnce: true});
    const [ ref2, inView2 ] = useInView({ threshold: 0.5, triggerOnce: true});

    return (
        <section id='about' className='about'>
            <div className='about-text-container'>
                <div className='title-container'>
                    <div className='title-about' ref={ref1}>
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            animate={ inView1 ? animationOptions1 : {} }
                        >nuestra historia</motion.h1>
                        <hr className="linea" />
                    </div>
                </div>
                <div className='parraf-container' ref={ref2}>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={ inView2 ? animationOptions2 : {} }>In aliquip dolor Lorem nostrud consectetur dolore ad enim. Commodo ut ut proident enim in proident et pariatur dolore consectetur eu excepteur ex adipisicing. Deserunt excepteur aute reprehenderit ad ad et proident culpa esse fugiat aliqua. Voluptate aute aliquip excepteur sint est eiusmod fugiat irure exercitation nostrud laboris pariatur Lorem.</motion.p>
                </div>
            </div>
        </section>
    )
}

export default About