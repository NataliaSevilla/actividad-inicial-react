function Product({ nombre, categoria, descripcion, precio, rutaImg }) {
  return (
    <section className="card">
      <div className="infoProducto">
        <p><span>Nombre:</span> {nombre} <br />
        <span>Categoria:</span> {categoria} <br />
        <span>Precio:</span> {precio}

        </p>
      </div>
      <div className="divImg">
        <img src={rutaImg} alt={descripcion} />
      {/* <img src="../../cuadernoA4.webp" alt="" />*/} 
      </div>
    </section>
  );
}

export default Product;
