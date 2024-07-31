import React from 'react';
import { useEffect, useState } from 'react';

const HomeProducts = () => {

  const [productos, setProductos] = useState([])

  const dataProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const json = await res.json();
      setProductos(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dataProducts()
  }, [])
  
  return (
    <>
    <header>
      <h1 className='text-center mt-4'>Desafio LEW</h1>
    </header>
    <main className="container text-center mt-5">
      <div className="row">
        {
          productos.length > 0
          ? productos.map(producto => (
              <div className="col" key={producto.id}>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={producto.image} className="card-img-top" alt={producto.title} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">
                      {producto.description}
                    </p>
                    <p>Precio: ${producto.price}</p>
                  </div>
                </div>
              </div>
          ))
          : "No existen productos actualmente o se están cargando..."
        }
      </div>
    </main>
    </>
  );  
}

export default HomeProducts;
