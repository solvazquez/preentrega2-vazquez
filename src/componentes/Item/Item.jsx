import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, autor, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3 className='nombreProducto' > {nombre}</h3>
            <h3 className='autorProducto' > {autor} </h3>
            <p>$ {precio} </p>
            <p>ID: {id} </p>

            <Link className='btnProducto' to={`/item/${id}`}> Ver Detalles</Link>
        </div>
    )
}

export default Item