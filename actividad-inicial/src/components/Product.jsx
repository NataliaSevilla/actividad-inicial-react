function Product({ nombre, categoria, descripcion, precio, rutaImg }) {
  return (
    <section className="card">
      <div>
        <p>Nombre: {nombre}</p>
        <p>Categoria: {categoria}</p>
        <p>Precio: {precio}</p>
      </div>
      <div className="divImg">
        <img src={rutaImg} alt={descripcion} />
      {/* <img src="../../cuadernoA4.webp" alt="" />*/} 
      </div>
    </section>
  );
}

export default Product;
