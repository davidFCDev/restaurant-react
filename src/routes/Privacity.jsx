import './privacity.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Privacity = () => {
    return (
        <section className='privacity'>
            <header className='header-privacity'>
                <Link to={'/'}>
                    <img src='/assets/logoPuzzle.png' alt='logo' className='img-logo'/>                
                </Link>
            </header>

            <main className='text-container-privacity'>
                <h1>Política de privacidad</h1>
                <hr className='line' />
                <div className='text-privacity'>
                    <div>
                        <p>Agustín Ramón Cádiz Vila informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan serrecabados por la navegación o contratación de servicios a través de su sitio web. En este sentido Agustín Ramón Cádiz Vila, garantiza el cumplimiento de la normativa vigente en materia deprotección de datos personales, reflejada en la Ley Orgánica 15/1999 de 13 de diciembre, de Protección de Datos de Carácter Personal y en el Real Decreto 1720/2007, de 21 diciembre, por el que se aprueba el Reglamento de Desarrollo de la LOPD. El uso de esta web implica la aceptación de esta política de privacidad.</p>
                    </div>
                    <div>
                        <h1>RECOGIDA, FINALIDAD Y TRATAMIENTO DE DATOS</h1>
                        <p>Agustín Ramón Cádiz Vila tiene el deber de informar a los usuarios de su sitio web acerca de la recogida dedatos de carácter personal que pueden llevarse a cabo, bien sea mediante el envío de correoelectrónico o al cumplimentar los formularios incluidos en el sitio web. En este sentido, Agustín Ramón Cádiz Vila será considerado como responsable de los datos recabados mediante los medios anteriormente descritos. A su vez Agustín Ramón Cádiz Vila informa a los usuarios de que la finalidad del tratamiento de los datos recabados contempla: La atención de solicitudes realizadas por los usuarios, la inclusión en la agenda de contactos, la prestación de servicios, la gestión de la relación comercial y otras finalidades. Las operaciones, gestiones y procedimientos técnicos que se realicen de forma automatizada o no automatizada y que posibiliten la recogida, el almacenamiento, la modificación, la transferencia y otras acciones sobre datos de carácter personal, tienen la consideración de tratamiento de datos personales. Todos los datos personales, que sean recogidos a través del sitio web de Agustín Ramón Cádiz Vila, y por tanto tenga la consideración de tratamiento de datos de carácter personal, serán incorporados en los ficheros.</p>
                    </div>
                    <div>
                        <h1>RECOGIDA, FINALIDAD Y TRATAMIENTO DE DATOS</h1>
                        <p>Agustín Ramón Cádiz Vila informa a los usuarios de que sus datos personales no serán cedidos a terceras organizaciones, con la salvedad de que dicha cesión de datos este amparada en una obligación legal o cuando la prestación de un servicio implique la necesidad de una relación contractual con un encargado de tratamiento. En este último caso, solo se llevará a cabo la cesión de datos al tercero cuando Agustín Ramón Cádiz Vila disponga del consentimiento expreso del usuario.</p>
                    </div>
                    <div>
                        <h1>DERECHOS DE LOS USUARIOS</h1>
                        <p>El usuario puede ejercer su derecho de acceso a los datos personales, así como solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando los datos ya no sean necesarios para los fines que fueron recogidos. También podrá solicitar la limitación, portabilidad y oposición del tratamiento de sus datos, en determinadas circunstancias y por motivos relacionados con su situación particular. Igualmente, podrá tener derecho a revocar su consentimiento en cualquier momento sin que ello afecte de manera retroactiva al tratamiento de datos realizado hasta el momento. El proveedor podrá ejercitar los derechos referidos anteriormente, en los términos y condiciones previstos en la legislación vigente, a</p>
                        <p>Responsable:<br/>
                        Identidad: Agustín Ramón Cádiz Vila<br/>
                        DNI: 78553190W <br/>
                        Dirección fiscal: Calle Puebla 11 1C <br/>
                        Correo electrónico: puzzlerestaurante@gmail.com <br/>
                        </p>
                        <p>Copyright © AGUSTÍN RAMÓN CÁDIZ VILA | RESERVADOS TODOS LOS DERECHOS</p>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}

export default Privacity