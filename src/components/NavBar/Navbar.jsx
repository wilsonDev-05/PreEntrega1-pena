import './Navbar.css' /* importacion de hoja de estilos navbar */
import Dropdown from './Dropdown/Dropdown'
import User from './User/User'
import Cartwidget from './Cartwidget/Cartwidget'
import Logo from '../../img/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar container">
      <img className='logo' src={Logo} alt="gardenShop" />
      <ul className="nav__horzontal">
        <li className="li__item"><a href="#" className="item__link">Inicio</a></li>
        <Dropdown />
        <li className="li__item"><a href="#" className="item__link">Contactos</a></li>
      </ul>
      <div className='nav__opciones'>
        <a href="#" className='nav__opciones__item'>
          <span className="material-symbols-outlined icon">
            search
          </span>
        </a>
        <Cartwidget />
        <User/>
      </div>
    </nav>
  )
}

// exportacion de componente "Navbar"
export default Navbar

// fragment: <> </> 