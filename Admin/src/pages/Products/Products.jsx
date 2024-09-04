import { useEffect, useState } from "react";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import Layout from "../../components/Layout";
import { Get, Remove } from "../../Services/Api";
import Swal from "sweetalert2";
import { UseSessionUser } from "../../Context/Session";
export default function Products() {
  const title = "Products";
  const [productos, setProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  const session = UseSessionUser();
  const [actions, setActions] = useState({
    add: false,
    edit: false,
    details: false,
    delete: false,
  });

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.PRODUCTS, ACTIONS.ACCESS)) {
        return (window.location.href = "/");
      }

      setActions({
        add: session.CanUserAccesTo(MODULES.PRODUCTS, ACTIONS.CREATE),
        edit: session.CanUserAccesTo(MODULES.PRODUCTS, ACTIONS.EDIT),
        details: session.CanUserAccesTo(MODULES.PRODUCTS, ACTIONS.DETAILS),
        delete: session.CanUserAccesTo(MODULES.PRODUCTS, ACTIONS.DELETE),
      });
    }
  }, [session]);

  async function getProducts() {
    await Get("/getProducts").then((data) => {
      setProducts(data.data);
    });
  }

  function deleteProduct(id, images) {
    if (!actions.delete) {
      return;
    }

    Swal.fire({
      title: "Are you sure to delete this product?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
      confirmButtonColor: "#f75554",
      denyButtonColor: "#949699",
    }).then((result) => {
      if (result.isConfirmed) {
        Remove("/deleteProduct", id, images)
          .then(() => {
            Swal.fire("Correctly deleted", "", "success").then(() => {
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
    <Layout title={title} module={MODULES.PRODUCTS}>
      {/* Page Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">{title}</a>
        <div className="ml-auto">
          <button className="btn btn-secondary mx-1" type="button">
            Export
          </button>
          {actions.add ? (
            <a
              href="/AddProduct"
              className="btn btn-primary mx-1"
              type="button"
            >
              Add
            </a>
          ) : (
            ""
          )}
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
                    placeholder="Search"
                    aria-label="Search"
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
                      Category
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
                      Filter
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
                        href={`${
                          actions.details ? "/Product/" + producto._id : ""
                        }`}
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
                          href={`${
                            actions.details ? "/Product/" + producto._id : ""
                          }`}
                          className="product-link"
                        >
                          <h5>{producto.name}</h5>
                          <p>Price: ${producto.price}</p>
                          <p>Quantity: {producto.quantity}</p>
                        </a>
                        <div className="row d-flex justify-content-center">
                          {actions.edit ? (
                            <a
                              href={`/EditProduct/${producto._id}`}
                              className="btn btn-sm btn-outline-dark col-5 mx-1"
                            >
                              Edit
                            </a>
                          ) : (
                            ""
                          )}
                          {actions.delete ? (
                            <button
                              className="btn btn-sm btn-outline-danger col-5 mx-1"
                              onClick={() => {
                                deleteProduct(producto._id, producto.images);
                              }}
                            >
                              Delete
                            </button>
                          ) : (
                            ""
                          )}
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
