import CartWidget from "../CartWidget/CartWidget"
import './NavBar.module.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h2>Hectech</h2>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/celular`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} style={{ margin: '3rem', backgroundColor: 'rgb(29, 107, 131)', color: 'rgb(255, 255, 255)', borderRadius: '8px',
        padding: '10px'}}>Celulares</NavLink>   
                <NavLink to={`/category/tablets`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} style={{ margin: '3rem', backgroundColor: 'rgb(29, 107, 131)', color: 'rgb(255, 255, 255)', borderRadius: '8px',
        padding: '10px'}}>Tablets</NavLink>             
                <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} style={{ margin: '3rem', backgroundColor: 'rgb(29, 107, 131)', color: 'rgb(255, 255, 255)', borderRadius: '8px',
        padding: '10px'}}>Accesorios</NavLink>                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar