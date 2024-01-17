import './ItemList.module.css'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return(
        <div className = 'ListGroup d-flex' >
            { products.map(prod => <Item key={prod.id} {...prod} />) }
        </div >
    )
}

export default ItemList