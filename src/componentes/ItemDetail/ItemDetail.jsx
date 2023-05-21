import './ItemDetail.css'

const ItemDetail = ({id, nombre, autor, precio, img}) => {
  return (
    <div className='contenedorItem'>

      <h2 className='nombreLibro'>{nombre}</h2>
      <h3 className='nombreAutor'> {autor} </h3>
      <p className='sinopsis'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt laboriosam quaerat rerum dolore quos obcaecati cumque natus cupiditate, inventore maiores nam similique, sunt animi est dolorum laborum tempora eveniet minima! </p>
      <p className='precio' > {precio} </p>
      <h3 className='textId' > {id} </h3>

      <img src={img} alt={nombre} />

    </div>
  )
}

export default ItemDetail