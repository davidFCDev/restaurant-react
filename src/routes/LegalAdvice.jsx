import '../styles/legalAdvice.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LegalAdvice = () => {
    return (
        <section className='legal'>
            <header className='header-legal'>
                <Link to={'/'}>
                    <img src='/assets/logoPuzzle.png' alt='logo' className='img-logo'/>                
                </Link>
            </header>

            <main className='text-container-legal'>
                <h1>Aviso Legal</h1>
                <hr className='line' />
                <div className='text-legal'>
                    <div>
                        <p>1. Los derechos de propiedad intelectual de la web www.puzzlemadrid.com, su código fuente, diseño, estructura de navegación, bases de datos y los distintos elementos en él contenidos son titularidad de Agustín Ramón Cádiz Vila, a quien corresponde el ejercicio exclusivo de los derechos de explotación de los mismos en cualquier forma y, en especial, los derechos de reproducción, distribución, comunicación pública y transformación.</p>
                    </div>
                    <div>
                        <p>2. Se autoriza la visualización, impresión y descarga parcial del contenido de la web sólo y exclusivamente si concurren las siguientes condiciones:</p>
                        <p>- Que sea compatible con los fines de la web www.puzzlemadriz.com</p>
                        <p>- Que se realice con el exclusivo ánimo de obtener la información contenida para uso personal y privado. Se prohíbe expresamente su utilización con fines comerciales o para su distribución, comunicación publica, transformación o descompilación.</p>
                        <p>- Que ninguno de los contenidos relacionados en esta web sean modificados de manera alguna.</p>
                        <p>- Que ningún gráfico, icono o imagen disponible en esta web sea utilizado, copiado o distribuido separadamente del texto o resto de imágenes que lo acompañan.</p>
                    </div>
                    <div>
                        <p>3. Agustín Ramón Cádiz Vila se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones y actualizaciones de la información contenida en su web, de la configuración y presentación de éste y de las condiciones de acceso.</p>
                    </div>
                    <div>
                        <p>4. Agustín Ramón Cádiz Vila no garantiza la inexistencia de interrupciones o errores en el acceso al web, en su contenido, ni que éste se encuentre actualizado, aunque desarrollará sus mejores esfuerzos para, en su caso, evitarlos, subsanarlos o actualizarlos.</p>
                    </div>
                    <div>
                        <p>5. Tanto el acceso a este web como el uso que pueda hacerse de la información contenida en el mismo es de la exclusiva responsabilidad de quien lo realiza. Agustín Ramón Cádiz Vila no responderá de ninguna consecuencia, daño o perjuicio que pudieran derivarse de dicho acceso o uso de la información. Agustín Ramón Cádiz Vila no se hace responsable de los posibles errores de seguridad que se puedan producir ni de los posibles daños que puedan causarse al sistema informático del usuario (hardware y software), los ficheros o documentos almacenados en el mismo, como consecuencia de la presencia de virus en el ordenador del usuario utilizado para la conexión a los servicios y contenidos de la web, de un mal funcionamiento del navegador o del uso de versiones no actualizadas del mismo.</p>
                    </div>
                    <div>
                        <p>6. Agustín Ramón Cádiz Vila es titular de los derechos de propiedad industrial referidos a sus productos y servicios. Respecto a las citas de productos y servicios de terceros Agustín Ramón Cádiz Vila reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en el web la existencia de derechos o responsabilidad alguna de Agustín Ramón Cádiz Vila sobre los mismos, como tampoco respaldo, patrocinio, recomendación por parte de Agustín Ramón Cádiz Vila Igualmente, todos los nombres comerciales, marcas o signos distintivos de cualquier clase contenidos en la página web de Agustín Ramón Cádiz Vila están protegidos por Ley.</p>
                    </div>
                    <div>
                        <p>7. La utilización no autorizada de la información contenida en esta web, su reventa, así como la lesión de los derechos de Propiedad Intelectual o Industrial de Agustín Ramón Cádiz Vila, dará lugar a las responsabilidades legalmente establecidas.</p>
                    </div>
                    <div>
                        <p>8. Los datos personales que el cliente facilita a Agustín Ramón Cádiz Vila serán utillizados únicamente para la elaboración de presupuestos y estos, se eliminarán a los 15 días. En ningún caso estos datos son incorporados a base de datos alguna ni cedidos a terceras empresas.</p>
                    </div>
                    <div>
                        <p>9. Las imágenes utilizadas en www.puzzlemadriz.com son originales o no tienen derechos de autor.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}

export default LegalAdvice