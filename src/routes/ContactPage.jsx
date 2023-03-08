import './contactPage.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';

const ContactPage = () => {

    const [accepted, setAccepted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, surname, email, phone } = event.target;
        if (!name.value || !surname.value || !email.value || !phone.value) {
            toast.error('Por favor, completa todos los campos requeridos');
            return;
        }
        if (!accepted) {
            toast.error('Debes aceptar la política de privacidad primero!');
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await axios.post('https://formspree.io/f/xdovznrd', {
                name: event.target.name.value,
                surname: event.target.surname.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
            });
            toast.success('Enviado correctamente')
            console.log('Formulario enviado', response.data);
            event.target.name.value = '';
            event.target.surname.value = '';
            event.target.email.value = '';
            event.target.phone.value = '';
            setAccepted(false);
        } catch (error) {
            console.error('Error al enviar formulario', error);
        }
        setIsSubmitting(false);
    }

    const handleCheckboxChange = () => {
        setAccepted(!accepted);
    }

    return (
        <section className='contact-page'>

            <header className='header-contact'>
                <Link to={'/'}>
                    <img src='/assets/logoPuzzle.png' alt='logo' className='img-logo'/>                
                </Link>
            </header>

            <main className='form-container'>
                <form
                    onSubmit={handleSubmit}
                    className="form"
                >
                    <h1 className='mb-10'>¡Pregunta lo que quieras!</h1>
                    <div class="group">
                        <input required="" type="text" className="input" name='name' />
                        <span className="bar"></span>
                        <label>Nombre</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" className="input" name='surname'/>
                        <span className="bar"></span>
                        <label>Apellido</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" className="input" name='email' />
                        <span className="bar"></span>
                        <label>Email</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" className="input" name='phone'/>
                        <span className="bar"></span>
                        <label>Teléfono</label>
                    </div>
                    <div className='inputcheck'>
                        <input 
                            type="checkbox"
                            checked={accepted}
                            onChange={handleCheckboxChange}
                            />
                        <Link
                        to={'/privacity'}
                        >
                            <span>Acepto política de privacidad</span>
                        </Link>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className='btn-submit'
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
                <Toaster />
            </main>

            <Footer />
        </section>
    )
}

export default ContactPage