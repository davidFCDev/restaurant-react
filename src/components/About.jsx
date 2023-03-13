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
    const [ ref3, inView3 ] = useInView({ threshold: 0.5, triggerOnce: true});
    const [ ref4, inView4 ] = useInView({ threshold: 0.5, triggerOnce: true});
    const [ ref5, inView5 ] = useInView({ threshold: 0.5, triggerOnce: true});

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
                <div className='parraf-container' >
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={ inView2 ? animationOptions2 : {} } ref={ref2}>PUZZLE es un rompecabezas gastronómico, donde cada pieza es igual de importante y esencial para lograr una experiencia culinaria única y divertida.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={ inView3 ? animationOptions2 : {} } ref={ref3}>... es pasión por dar de comer y ver disfrutar a nuestros clientes.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={ inView4 ? animationOptions2 : {} } ref={ref4}>... es un buen vinito o vinitos bien acompañado.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={ inView5 ? animationOptions2 : {} } ref={ref5}>... pero, sobre todo, es diversión en cada aspecto que lo compone.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default About