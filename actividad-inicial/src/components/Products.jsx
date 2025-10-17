import Product from "./Product";

function Products() {
  // ejemplo de un productor cogido del array de data.
  const cuaderno_a4 = {
    nombre: "Cuaderno A4",
    categoria: "Papelería",
    precio: 3.5,
    descripción: "Cuaderno tamaño A4 con 100 hojas rayadas y tapa blanda.",
    urlImg: "../../cuadernoA4.webp"    
  };
  return (
    <main>
      <h1>Papelería divina</h1>
      <Product nombre={cuaderno_a4.nombre} categoria={cuaderno_a4.categoria} precio={cuaderno_a4.precio}
      descripcion={cuaderno_a4.descripción} rutaImg={cuaderno_a4.urlImg}/>
    
    </main>
  );
}

export default Products;
