import '../styles/errorPage.css';
import { VscError } from 'react-icons/vsc';

const ErrorPage = () => {
    return (
        <section className='errorpage'>
                <div className='text-error'>
                    <h1>Oops!</h1>
                    <p>Algo ha fallado...</p>
                    <VscError className='text-[80px] text-primary'/>
                </div>
        </section>
    )
}

export default ErrorPage