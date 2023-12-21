import CartWidget from "../CartWidget/CartWidget"
import './NavBar.module.css'

const NavBar = () => {
    return (
        <nav>            
            <h2>Hectech</h2>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar