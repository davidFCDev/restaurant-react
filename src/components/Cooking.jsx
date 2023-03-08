import './cooking.css';
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
        x: 0,
        transition: { duration: 1.2 }
    };

    const [ ref1, inView1 ] = useInView({ threshold: 0.6, triggerOnce: true});
    const [ ref2, inView2 ] = useInView({ threshold: 0.6, triggerOnce: true});
    const [ ref3, inView3 ] = useInView({ threshold: 0.9, triggerOnce: true});
    const [ ref4, inView4 ] = useInView({ threshold: 0.9, triggerOnce: true});
    const [ ref5, inView5 ] = useInView({ threshold: 0.9, triggerOnce: true});

    return (
        <section id='cooking' className='cooking'>
            <div className='chef-img-container'>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={ inView1 ? animationOptions1 : {} } className='img-container' ref={ref1}>
                    <img 
                        id='chef1' 
                        src='/assets/chef5.webp' 
                        alt='chef1' 
                        />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={ inView2 ? animationOptions2 : {} } className='img-container' ref={ref2}>
                    <img 
                        id='chef2' 
                        src='/assets/chef6.webp' 
                        alt='chef2' 
                        />
                </motion.div>
            </div>
            <div className='chef-text-container'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={ inView3 ? animationOptions3 : {} } className='img-container' ref={ref3}>
                    <TextBubbleLeft text={'"Vanguardia o morir"'}/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={ inView4 ? animationOptions3 : {} } className='img-container' ref={ref4}>
                    <TextBubbleRight text={'"Tradición e innovación"'}/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={ inView5 ? animationOptions3 : {} } className='img-container' ref={ref5}>
                    <TextBubbleLeft text={'"Cocina o que ase"'}/>
                </motion.div>
            </div>
        </section>
    )
}

export default Cooking