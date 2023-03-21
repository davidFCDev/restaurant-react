import './cookies.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Cookies = () => {
    return (
        <section className='cookies'>
            <header className='header-cookies'>
                <Link to={'/'}>
                    <img src='/assets/logoPuzzle.png' alt='logo' className='img-logo'/>                
                </Link>
            </header>

            <main className='text-container-cookies'>
                <h1>Política de Cookies</h1>
                <hr className='line' />
                <div className='text-cookies'>
                    <div>
                        <p>Desde Puzzle te informamos que nuestra página web utiliza cookies para analizar la navegación de usuarios. Esta Política de Cookies, forma parte de la Política de Privacidad del Sitio Web alojado bajo el nombre de dominio www.puzzlemadriz.com y bajo cualquiera de los subdominios o páginas web dependientes del mismo.</p>
                        <p>Utilizamos cookies para mejorar nuestros servicios. Al continuar navegando por nuestro Sitio web entendemos que aceptas su uso y nuestra Política de Cookies. Puzzle Madrid podrá revisar el contenido de estas condiciones de uso cuando lo crea conveniente, o las modificaciones efectuadas en el sitio Web así lo recomienden. Puesto que el uso de los contenidos y servicios de esta página Web supone la aceptación de las condiciones aquí expuestas, así como de sus posteriores modificaciones, se recomienda la lectura frecuente de esta sección en caso de existir un uso continuado del sitio Web.</p>
                    </div>
                    <div>
                        <h2>¿Qué son las cookies?</h2>
                        <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
                    </div>
                    <div>
                        <h2>¿Por qué utilizamos cookies?</h2>
                        <p>Utilizamos cookies para obtener más información sobre la forma en que los visitantes interactúan con nuestro contenido y nos ayudan a mejorar la experiencia de los usuarios cuando visitan el sitio Web www.puzzlemadriz.com</p>
                    </div>
                    <div>
                        <h2>¿Qué tipos de cookies utiliza esta página web y quién las utiliza?</h2>
                        <p>La información obtenida por las cookies de este sitio Web es tratada por el editor del sitio Web www.puzzlemadriz.com</p>
                        <p>La aplicación que utilizamos para obtener y analizar la información de la navegación es: Google Analytics: www.google.com/analytics/ y www.google.es/intl/es/analytics/privacyoverview.html</p>

                        <p>Esta aplicación ha sido desarrollada por Google, que nos presta el servicio de análisis de la audiencia de nuestra página. Esta empresa puede utilizar estos datos para mejorar sus propios servicios y para ofrecer servicios a otras empresas. Puedes conocer esos otros usos desde los enlaces indicados. Esta herramienta no obtiene datos de los nombres o apellidos de los usuarios ni de la dirección postal desde donde se conectan.</p> 
                        <p>La información que obtiene está relacionada por ejemplo con el número de páginas visitas, el idioma, red social en la que se publican nuestras noticias, la ciudad a la que está asignada la dirección IP desde la que acceden los usuarios, el número de usuarios que nos visitan, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de terminal desde el que se realiza la visita. Esta información la utilizamos para mejorar nuestra página, detectar nuevas necesidades y valorar las mejoras a introducir con la finalidad de prestar un mejor servicio a los usuarios que nos visitan. Esta página web también utiliza cookies para el seguimiento de conversiones en Google Adwords. La cookie que se añade al equipo de un usuario cuando este ve un anuncio o hace clic en él caduca a los 30 días. Esta medida y el hecho de que Google utiliza servidores distintos para el seguimiento de conversiones y para los resultados de las búsquedas, protege la privacidad del usuario. El proveedor de dichas cookies es Google. Esta página web también utiliza la herramienta de remarketing de Google Adwords. Esta herramienta permite publicar en la Red de contenido de Google anuncios basados en visitas anteriores de usuarios a nuestra web. Para conseguirlo, algunas de las páginas de nuestro sitio web incluyen un código o etiqueta de remarketing que configuran las cookies para determinar el tipo de anuncio que se mostrará al usuario según la navegación que haya realizado por el sitio web. Las listas de remarketing se guardan en una base de datos de los servidores de Google, donde se almacenan todos los ID de cookie asociados a cada lista o categoría de interés. Respecto a las cookies de remarketing, el usuario puede inhabilitar el uso de cookies de Google, visitando la página de inhabilitación de publicidad de Google. Dichas cookies son proporcionadas por Google. También utilizamos la cookie “Doubleclick”. Dicha cookie permite proporcionar anuncios gestionados a través de terceros (“Ad-Servers”). Se trata de una cookie proporcionada por Google.</p>
                    </div>
                    <div>
                        <h2>¿Cómo se rechazan las cookies?</h2>
                        <p>Para permitir, conocer, bloquear o eliminar las cookies instaladas en su equipo puede hacerlo mediante la configuración de las opciones del navegador instalado en su ordenador. Por ejemplo puede encontrar información sobre cómo hacerlo en el caso de que use como navegador:</p>
                        <p>Firefox desde: <a href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es'>aquí</a></p>
                        <p>Chrome desde: <a href='https://support.google.com/chrome/answer/95647?hl=es'>aquí</a></p>
                        <p>Explorer desde: <a href='https://support.microsoft.com/es-es/windows'>aquí</a></p>
                        <p>Safari desde: <a href='https://support.apple.com/es-es/guide/safari/sfri11471/mac'>aquí</a></p>
                        <p>Opera desde: <a href='https://help.opera.com/en/latest/web-preferences/#cookies'>aquí</a></p>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}

export default Cookies