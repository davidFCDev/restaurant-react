import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <a href='#'><li className='navbar-list-element active'>HOME</li></a>
                <a href='#about'><li className='navbar-list-element'>PUZZLE</li></a>
                <a href='#cooking'><li className='navbar-list-element'>COCINA</li></a>
            </ul>
        </nav>
    )
}

export default Navbar