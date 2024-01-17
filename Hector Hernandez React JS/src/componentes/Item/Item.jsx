import styles from './Item.module.css'
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {

    return (
        <article className={styles.CardItem}>            
            <header className='ItemHeader'>
                <h2 className='m-4'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt="imagen" className={styles.ItemImg} />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'  style={{ padding: '10px', backgroundColor: 'rgb(29, 107, 131)', color: '#ffffff', borderRadius: '5px', }}>Ver Detalles</Link>
            </footer>            
        </article>
    )
}

export default Item