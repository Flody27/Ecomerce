import Layout from "../../components/Layout";
import { GetById, Get, Create } from "../../Services/Api";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function EditProduct() {
  const title = "Editar Producto";
  const [imagesUI, setImagesUI] = useState([]);
  const [imagesOG, setImagesOG] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tag, setTag] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    brand: "",
    category: "",
    quantity: 0,
    images: [],
    tags: [],
  });

  useEffect(() => {
    GetCategories();
    GetById("/getProduct", window.location.pathname.split("/")[2]).then(
      (data) => {
        setProduct(data.data);
        setTags(data.data.tags);
        setImagesUI(data.data.images.map((img) => `${baseUrl}/${img}`));
        setImagesOG(data.data.images.map((img) => `${baseUrl}/${img}`));
      }
    );
  }, []);

  function GetCategories() {
    Get("/getCategories").then((categories) => {
      setCategories(categories.data);
    });
  }

  function AddImage(event) {
    const filesArray = Array.from(event.target.files);
    const imagesArray = filesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    console.log(filesArray);
    setImagesUI((img) => img.concat(imagesArray));
    setProduct({ ...product, images: filesArray });
  }

  function DeleteImage(index) {
    setImagesUI((img) => img.filter((_, i) => i !== index));
    setProduct({
      ...product,
      images: product.images.filter((_, i) => i !== index),
    });
  }

  function AddTag(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setTags((x) => x.concat(tag));
      setTag("");
    }
  }

  function DeleteTag(tagremove) {
    setTags((tag) => tag.filter((x) => x != tagremove));
  }

  const HandleInputChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <Layout title={title}>
      <div className="container-fluid">
        <div className="row clearfix d-flex justify-content-center">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <form className="card" noValidate autoSave="false" id="formData">
              <div className="body row">
                <div className="form-group mb-3 col-12">
                  <b>Nombre</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="name"
                    id="name"
                    value={product.name}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-12">
                  <b>Detalles</b>
                  <textarea
                    name="description"
                    id="description"
                    aria-label="DescripcionDelProducto"
                    value={product.description}
                    rows="2"
                    className="form-control"
                    required
                    onChange={HandleInputChange}
                  ></textarea>
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Precio</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="PrecioProdcuto"
                    name="price"
                    id="price"
                    value={product.price}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Descuento</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="PrecioProdcuto"
                    name="discount"
                    id="discount"
                    value={product.discount}
                    onChange={HandleInputChange}
                  />
                  <small>Porcentaje de descuento</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Cantidad</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="PrecioProdcuto"
                    name="quantity"
                    id="quantity"
                    value={product.quantity}
                    onChange={HandleInputChange}
                  />
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Marca</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="MarcaProducto"
                    name="brand"
                    id="brand"
                    value={product.brand}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Categoria</b>
                  <select
                    className="custom-select"
                    id="category"
                    name="category"
                    required
                    defaultValue={product.category}
                    onChange={HandleInputChange}
                  >
                    <option value="Selecione una categoría" disabled>
                      Selecione una categoría
                    </option>
                    {categories.map((category) => (
                      <option key={category._id} value={category.category}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-12">
                  <b>
                    Etiquetas <small>(Tags)</small>
                  </b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="tags"
                    id="tags"
                    value={tag}
                    onChange={(event) => {
                      setTag(event.target.value);
                    }}
                    onKeyDown={AddTag}
                  />
                  <small style={{ display: "block" }}>
                    Presionar enter para agregar tag
                  </small>

                  {tags.map((tag, key) => {
                    return (
                      <div className="card-tag" key={key}>
                        <p>{tag}</p>
                        <button type="button" onClick={() => DeleteTag(tag)}>
                          <i className="ti-close"></i>
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="form-group mb-3 col-12">
                  <b>Imagenes</b>
                  <div className="row">
                    {imagesUI.map((img, index) => {
                      return (
                        <div className="col-4" key={index}>
                          <div className="card img-card">
                            <img src={img} alt="" />
                            <button
                              type="button"
                              onClick={() => {
                                DeleteImage(index);
                              }}
                              className="btn-img-delete"
                            >
                              <i className="ti-trash"></i>
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    <div className="col-4">
                      <label htmlFor="images">
                        <div className="card input-card-img">
                          <i className="ti-cloud-up"></i>
                        </div>
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id="images"
                        value={""}
                        onChange={AddImage}
                        className="input-img"
                        multiple
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    // onClick={() => HandleSubmit()}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
