/* eslint-disable no-undef */
import Layout from "../../components/Layout";
import { useState } from "react";
import { Create } from "../../Services/Api";
import { object, string, number, array } from "yup";
import Swal from "sweetalert2";

export default function AddCustomer() {
  const title = "Agregar Cliente";

  const [customer, setCustomer] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    address: [],
    userType: "customer",
  });

  const schemaCustomer = object().shape({
    name: string()
      .required("El campo nombre es obligatorio")
      .typeError("Valor incorrecto en el campo nombre"),
    lastName: string()
      .required("El campo apellido es obligatorio")
      .typeError("Valor incorrecto en el campo apellido"),
    email: string()
      .email()
      .required("El campo correo es obligatorio")
      .typeError("Valor incorrecto en el campo correo"),
    phoneNumber: number()
      .required("El campo numero telefonico es obligatorio")
      .typeError("Valor incorrecto en el campo numero telefonico"),
    address: array()
      .min(1, "Debe agregar al menos una direccion")
      .max(3, "El maximo de direcciones a registrar es de 3"),
  });

  const [address, setAddress] = useState({
    country: "",
    state: "",
    city: "",
    zipCode: null,
    address: "",
  });

  const schemaAddress = object().shape({
    country: string()
      .required("El campo pais es obligatorio")
      .typeError("Valor incorrecto en el campo pais"),
    state: string()
      .required("El campo estado es obligatorio")
      .typeError("Valor incorrecto en el campo estado"),
    city: string()
      .required("El campo ciudad es obligatorio")
      .typeError("Valor incorrecto en el campo ciudad"),
    zipCode: number().typeError("Valor incorrecto en el campo codigo postal"),
    address: string()
      .required("El campo direccion es obligatorio")
      .typeError("Valor incorrecto en el campo direccion"),
  });

  const HandleInputChange = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const HandleAddress = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  async function AddAddres() {
    try {
      await schemaAddress.validate(address, { abortEarly: false });

      setCustomer({ ...customer, address: customer.address.concat(address) });

      return Swal.fire(
        "Éxito",
        "Direccion registrada exitosamente",
        "success"
      ).then(() => {
        CleanAddress();
        $("#modalAddress").modal("hide");
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        let message = "";
        error.inner.forEach((err) => {
          message += `<p>${err.message}<p/>`;
        });
        Swal.fire("Oops", message, "error");
      } else {
        Swal.fire("Error", error.message, "error");
      }
    }
  }

  function validateMaxAddress() {
    if (customer.address.length == 3) {
      return Swal.fire(
        "Upps",
        "El maximo de direcciones a registrar es de 3",
        "error"
      ).then(() => {
        $("#modalAddress").modal("hide");
      });
    }
  }

  function CleanAddress() {
    setAddress({
      country: "",
      state: "",
      city: "",
      zipCode: "",
      address: "",
    });
  }

  function DeleteAddres(index) {
    setCustomer({
      ...customer,
      address: customer.address.filter((_, i) => i !== index),
    });
  }

  async function HandleSubmit() {
    try {
      await schemaCustomer.validate(customer, { abortEarly: false });

      await Create("/addUser", customer);
      Swal.fire("Éxito", "Cliente registrado exitosamente", "success").then(
        () => {
          window.location = "/Clientes";
        }
      );
    } catch (error) {
      if (error.name === "ValidationError") {
        let message = "";
        error.inner.forEach((err) => {
          message += `<p>${err.message}<p/>`;
        });
        Swal.fire("Oops", message, "error");
      } else {
        Swal.fire("Error", error.message, "error");
      }
    }
  }
  return (
    <Layout title={title}>
      <div className="container-fluid">
        <div className="row clearfix d-flex justify-content-center">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <form className="card" noValidate autoSave="false" id="formData">
              <div className="body row">
                <div className="form-group mb-3 col-6">
                  <b>Nombre</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="name"
                    id="name"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Apellidos</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="lastName"
                    id="lastName"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Correo</b>
                  <input
                    type="email"
                    className="form-control"
                    aria-label=""
                    name="email"
                    id="email"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Numero telefonico</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label=""
                    name="phoneNumber"
                    id="phoneNumber"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="col-12 mb-2">
                  <hr />
                  <b>Direccion</b>
                </div>

                {customer.address.map((adrs, index) => {
                  return (
                    <div className="col-4" key={index}>
                      <div className="card generic-card">
                        <button
                          className="btn-delete-generic"
                          onClick={() => DeleteAddres(index)}
                          type="button"
                        >
                          <i className="ti-close"></i>
                        </button>
                        <p>
                          <b>Pais: </b>
                          {adrs.country}
                        </p>
                        <p>
                          <b>Estado: </b>
                          {adrs.state}
                        </p>
                        <p>
                          <b>Ciudad: </b>
                          {adrs.city}
                        </p>
                        <p>
                          <b>Codigo Postal: </b>
                          {adrs.zipCode}
                        </p>
                        <p>
                          <b>Direccion: </b>
                          {adrs.address}
                        </p>
                      </div>
                    </div>
                  );
                })}

                <div className="col-4">
                  <button
                    type="button"
                    className="btn-add-address"
                    data-toggle="modal"
                    data-target="#modalAddress"
                    onClick={validateMaxAddress}
                  >
                    Agregar direccion
                  </button>
                </div>

                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => HandleSubmit()}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal add address */}
      <div
        className="modal fade"
        id="modalAddress"
        tabIndex="-1"
        aria-labelledby="modalAddress"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Direccion</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti-close" style={{ color: "black" }}></i>
              </button>
            </div>
            <div className="modal-body row">
              <div className="form-group mb-3 col-6">
                <b>Pais</b>
                <input
                  type="text"
                  className="form-control"
                  aria-label=""
                  name="country"
                  id="country"
                  value={address.country}
                  required
                  onChange={HandleAddress}
                />
                <small>Obligatorio</small>
              </div>
              <div className="form-group mb-3 col-6">
                <b>Estado/Provincia/Region</b>
                <input
                  type="text"
                  className="form-control"
                  aria-label=""
                  name="state"
                  id="state"
                  value={address.state}
                  required
                  onChange={HandleAddress}
                />
                <small>Obligatorio</small>
              </div>
              <div className="form-group mb-3 col-6">
                <b>Ciudad</b>
                <input
                  type="text"
                  className="form-control"
                  aria-label=""
                  name="city"
                  id="city"
                  value={address.city}
                  required
                  onChange={HandleAddress}
                />
                <small>Obligatorio</small>
              </div>
              <div className="form-group mb-3 col-6">
                <b>Codigo postal</b>
                <input
                  type="number"
                  className="form-control"
                  aria-label=""
                  name="zipCode"
                  id="zipCode"
                  value={address.zipCode}
                  onChange={HandleAddress}
                />
              </div>
              <div className="form-group mb-3 col-12">
                <b>Direccion</b>
                <textarea
                  name="address"
                  id="address"
                  rows="2"
                  className="form-control"
                  required
                  value={address.address}
                  onChange={HandleAddress}
                ></textarea>
                <small>Obligatorio</small>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={CleanAddress}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AddAddres}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
