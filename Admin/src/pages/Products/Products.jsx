import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Get, Remove } from "../../Services/Api";
import Swal from "sweetalert2";

export default function Products() {
  const title = "Productos";
  const [productos, setProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    await Get("/getProducts").then((data) => {
      setProducts(data.data);
    });
  }

  function deleteProduct(id) {
    Swal.fire({
      title: "Estas seguro en eliminar este producto?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: "Cancelar",
      confirmButtonColor: "#f75554",
      denyButtonColor: "#949699",
    }).then((result) => {
      if (result.isConfirmed) {
        Remove("/deleteProduct", id)
          .then(() => {
            Swal.fire("Eliminado correctamente", "", "success").then(() => {
              window.location.reload();
            });
          })
          .catch((error) => {
            Swal.fire({
              text: error,
              icon: "error",
            });
          });
      }
    });
  }

  return (
    <Layout title={title}>
      {/* Page Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">{title}</a>
        <div className="ml-auto">
          <button className="btn btn-secondary mx-1" type="button">
            Exportar
          </button>
          <a
            href="/AgregarProducto"
            className="btn btn-primary mx-1"
            type="button"
          >
            Agregar
          </a>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row clearfix">
          {/* Utils */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card p-2">
              <div className="row">
                <div className="col-lg-6 col-sm-12 my-sm-1">
                  <input
                    className="form-control w-75"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Buscar"
                  />
                </div>

                <div className="d-flex col-lg-6 col-sm-12 my-sm-1 justify-content-end">
                  <div className="dropdown mx-1">
                    <button
                      className="btn btn-dropdown dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categoria
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>

                  <div className="dropdown mx-1">
                    <button
                      className="btn btn-dropdown dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Filtrar
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row d-flex justify-content-center">
              {productos.map((producto) => {
                return (
                  <div className="m-1" key={producto._id}>
                    <div className="card prod-card" style={{ width: "14rem" }}>
                      <a
                        href={`/${producto.name}/${producto._id}`}
                        className="product-link"
                      >
                        <img
                          src={`${baseUrl}/${producto.images[0]}`}
                          className="card-img-top img-product"
                          alt=""
                        />
                      </a>
                      <div className="card-body">
                        <a
                          href={`/${producto.name}/${producto._id}`}
                          className="product-link"
                        >
                          <h5>{producto.name}</h5>
                          <p>Precio: ${producto.price}</p>
                          <p>Disponibles: {producto.quantity}</p>
                        </a>
                        <div className="row d-flex justify-content-center">
                          <a
                            href={`/EditarProducto/${producto._id}`}
                            className="btn btn-sm btn-outline-dark col-5 mx-1"
                          >
                            Editar
                          </a>
                          <button
                            className="btn btn-sm btn-outline-danger col-5 mx-1"
                            onClick={() => {
                              deleteProduct(producto._id);
                            }}
                          >
                            Borrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
