/* eslint-disable no-undef */
import Layout from "../../components/Layout";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { useEffect, useState } from "react";
import { GetById, Update } from "../../Services/Api";
import { object, string, number, array } from "yup";
import Swal from "sweetalert2";

export default function EditCustomer() {
  const title = "Editar Cliente";
  const session = UseSessionUser();
  const customerId = window.location.pathname.split("/")[2];
  const [customer, setCustomer] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    address: [],
    userType: "customer",
  });

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.CUSTOMERS, ACTIONS.EDIT)) {
        return (window.location.href = "/");
      }
    }
  }, [session]);

  const schemaCustomer = object().shape({
    name: string()
      .required("The name field is required.")
      .typeError("Incorrect value in the name field."),
    lastName: string()
      .required("The last name field is required.")
      .typeError("Incorrect value in the last name field."),
    email: string()
      .email()
      .required("The email field is required.")
      .typeError("Incorrect value in the email field."),
    phoneNumber: number()
      .required("The phone nueber field is required.")
      .typeError("Incorrect value in the phone number field."),
    address: array()
      .min(1, "You must add at least one address.")
      .max(3, "The maximum number of addresses to register is 3."),
  });

  const [address, setAddress] = useState({
    country: "",
    state: "",
    city: "",
    zipCode: "",
    address: "",
  });

  const schemaAddress = object().shape({
    country: string()
      .required("The country field is required.")
      .typeError("Incorrect value in the country field."),
    state: string()
      .required("The state field is required.")
      .typeError("Incorrect value in the state field."),
    city: string()
      .required("The city field is required.")
      .typeError("Incorrect value in the city field."),
    zipCode: number().typeError("Incorrect value in the zip code field."),
    address: string()
      .required("The address field is required.")
      .typeError("Incorrect value in the address field."),
  });

  useEffect(() => {
    GetById("/getUser", customerId).then((data) => {
      setCustomer(data.data);
    });
  }, []);

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

      return Swal.fire("Success", "Address added successfully", "success").then(
        () => {
          CleanAddress();
          $("#modalAddress").modal("hide");
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

  function CleanAddress() {
    setAddress({
      country: "",
      state: "",
      city: "",
      zipCode: "",
      address: "",
    });
  }

  function validateMaxAddress() {
    if (customer.address.length == 3) {
      return Swal.fire(
        "Upps",
        "The maximum number of addresses to register is 3.",
        "error"
      ).then(() => {
        $("#modalAddress").modal("hide");
      });
    }
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

      await Update(`/editUser/${customerId}`, customer);
      Swal.fire("Success", "Changes successfully saved", "success").then(() => {
        window.location = "/Customers";
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

  return (
    <Layout title={title} module={MODULES.CUSTOMERS}>
      <div className="container-fluid">
        <div className="row clearfix d-flex justify-content-center">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <form className="card" noValidate autoSave="false" id="formData">
              <div className="body row">
                <div className="form-group mb-3 col-6">
                  <b>Name</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="name"
                    id="name"
                    value={customer.name}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Last name</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="lastName"
                    id="lastName"
                    required
                    value={customer.lastName}
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Email</b>
                  <input
                    type="email"
                    className="form-control"
                    aria-label=""
                    name="email"
                    id="email"
                    required
                    value={customer.email}
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Phone number</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label=""
                    name="phoneNumber"
                    id="phoneNumber"
                    required
                    value={customer.phoneNumber}
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="col-12 mb-2">
                  <hr />
                  <b>Address</b>
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
                          <b>Country: </b>
                          {adrs.country}
                        </p>
                        <p>
                          <b>State: </b>
                          {adrs.state}
                        </p>
                        <p>
                          <b>City: </b>
                          {adrs.city}
                        </p>
                        <p>
                          <b>Zip code: </b>
                          {adrs.zipCode}
                        </p>
                        <p>
                          <b>Address: </b>
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
                    Add Address
                  </button>
                </div>

                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => HandleSubmit()}
                  >
                    Save Changes
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
              <h5 className="modal-title">Address</h5>
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
                <b>Country</b>
                <input
                  type="text"
                  className="form-control"
                  aria-label=""
                  name="country"
                  id="country"
                  required
                  value={address.country}
                  onChange={HandleAddress}
                />
                <small>Required</small>
              </div>
              <div className="form-group mb-3 col-6">
                <b>State/Province/Region</b>
                <input
                  type="text"
                  className="form-control"
                  aria-label=""
                  name="state"
                  id="state"
                  required
                  value={address.state}
                  onChange={HandleAddress}
                />
                <small>Required</small>
              </div>
              <div className="form-group mb-3 col-6">
                <b>City</b>
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
                <small>Required</small>
              </div>
              <div className="form-group mb-3 col-6">
                <b>Zip Code</b>
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
                <b>Address</b>
                <textarea
                  name="address"
                  id="address"
                  rows="2"
                  className="form-control"
                  required
                  value={address.address}
                  onChange={HandleAddress}
                ></textarea>
                <small>Required</small>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={CleanAddress}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AddAddres}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
