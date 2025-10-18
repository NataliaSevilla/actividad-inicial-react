import Product from "./Product";
import productosPapeleria from "../../data/data";
function Products() {
  // ejemplo de un productor cogido del array de data.
  const cuaderno_a4 = {
    nombre: "Cuaderno A4",
    categoria: "Papelería",
    precio: 3.5,
    descripción: "Cuaderno tamaño A4 con 100 hojas rayadas y tapa blanda.",
    urlImg: "../../cuadernoA4.webp",
  };

  const urlImg = [
    "../../boligrafo-azul.webp",
    "../../lapiz-hb.webp",
    "../../goma-borrar.webp",
    "../../regla-30-cm.webp",
    "../../marcadores-fluorescente.webp",
    "../../carpeta-anillas.webp",
    "../../post-it-colores.webp",
    "../../tijeras-escolar.webp",
    "../../pegamento-barra.webp",
  ];
  return (
    <main className="div-main">
      <h1>Papelería divina</h1>
      <div>
        <h2>Productos a la venta</h2>
        <div className="divProductos">
          {productosPapeleria.map((producto) => {
            return (
              <Product
                nombre={producto.nombre}
                precio={producto.precio}
                categoria={producto.categoria}
                descripcion={producto.descripcion}
                rutaImg={producto.urlImg}
              />
            );
          })}
        </div>
        

      {/*   usando los array y el objeto que tiene este componente X 
        <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg="https://media.istockphoto.com/id/1312335472/es/foto/palo-de-pegamento-aislado-sobre-blanco.jpg?s=2048x2048&w=is&k=20&c=aWSz_wZMkNCAfe9v48ZzDw2h9F5BCe9dH2mvK8WaK4Y="
        />

        <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[0]}
        />

        <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[1]}
        />

        <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[2]}
        />

        <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[3]}
        />

        <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[4]}
        />
          <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[5]}
        />
          <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[6]}
        />
          <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[7]}
        />
          <Product
          nombre={cuaderno_a4.nombre}
          categoria={cuaderno_a4.categoria}
          precio={cuaderno_a4.precio}
          descripcion={cuaderno_a4.descripción}
          rutaImg={urlImg[8]}
        />
 */}
        
      </div>
    </main>
  );
}

export default Products;
