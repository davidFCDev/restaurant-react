import '../styles/cooking.css';
import TextBubbleLeft from './TextBubbleLeft';
import TextBubbleRight from './TextBubbleRight';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Cooking = () => {

    const animationOptions1 = {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    };

    const animationOptions2 = {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    };

    const animationOptions3 = {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    };

    const animationOptions4 = {
        opacity: 1,
        x: 0,
        transition: { duration: 1.2 }
    };

    const animationOptions5 = {
        opacity: 1,
        x: 0,
        transition: { duration: 1.2 }
    };

    const [ ref1, inView1 ] = useInView({ threshold: 0.6, triggerOnce: true});
    const [ ref2, inView2 ] = useInView({ threshold: 0.6, triggerOnce: true});
    const [ ref3, inView3 ] = useInView({ threshold: 0.9, triggerOnce: true});
    const [ ref4, inView4 ] = useInView({ threshold: 0.9, triggerOnce: true});
    const [ ref5, inView5 ] = useInView({ threshold: 0.9, triggerOnce: true});
    const [ ref6, inView6 ] = useInView({ threshold: 0.9, triggerOnce: true});

    return (
        <section id='cooking' className='cooking'>
            <div className='chef-img-container'>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={ inView1 ? animationOptions1 : {} } ref={ref1}>
                    <img 
                        id='chef1' 
                        src='/assets/fotoChef1.jpg' 
                        alt='chef1' 
                        />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={ inView2 ? animationOptions2 : {} } ref={ref2}>
                    <img 
                        id='chef2' 
                        src='/assets/fotoChef2.jpg' 
                        alt='chef2' 
                        />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={ inView3 ? animationOptions3 : {} } ref={ref3}>
                    <img 
                        id='chef3' 
                        src='/assets/fotoChef3.jpg' 
                        alt='chef3' 
                        />
                </motion.div>
            </div>
            <div className='chef-text-container'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={ inView4 ? animationOptions4 : {} } ref={ref4}>
                    <TextBubbleLeft text={'"Fusión de sabores en cada bocado"'}/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={ inView5 ? animationOptions5 : {} } ref={ref5}>
                    <TextBubbleRight text={'"Vinos originales y con flow"'}/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={ inView6 ? animationOptions4 : {} } ref={ref6}>
                    <TextBubbleLeft text={'"Diversión gastronómica sin límites"'}/>
                </motion.div>
            </div>
        </section>
    )
}

export default Cooking