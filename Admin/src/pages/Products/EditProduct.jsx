import Layout from "../../components/Layout";
import { GetById, Get, Update } from "../../Services/Api";
import { useState, useEffect } from "react";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import Swal from "sweetalert2";
import axios from "axios";
import { object, string, number, array } from "yup";
import { MODULES } from "../../Enums/ModuleEnums";

// TODO: Restructurar logica del editar las imagenes

export default function EditProduct() {
  const title = "Editar Producto";
  const session = UseSessionUser();
  const [imagesUI, setImagesUI] = useState([]);
  const [ogImages, setOgImages] = useState([]);
  const [deleteImages, setDeleteImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tag, setTag] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;
  const productId = window.location.pathname.split("/")[2];
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

  const schemaProduct = object().shape({
    name: string()
      .required("The  field is required")
      .typeError("Incorrect value in the name field"),
    description: string()
      .required("The description field is required")
      .typeError("Incorrect value in the description field"),
    price: number()
      .typeError("The price must a numeric value")
      .required("The price field is required"),
    discount: number().typeError("The discount must be a numeric value"),
    brand: string()
      .required("The brand field is required")
      .typeError("Incorrect value in the brand field"),
    category: string().required("The category field is required"),
    quantity: number()
      .typeError("The quantity must a numeric value")
      .required("The quantity field is required"),
    images: array().min(1, "You must add at least one image"),
    tags: array(),
  });

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.PRODUCTS, ACTIONS.EDIT)) {
        return (window.location.href = "/");
      }
    }
  }, [session]);

  useEffect(() => {
    GetCategories();
    GetById("/getProduct", productId).then((data) => {
      setProduct(data.data);
      setTags(data.data.tags);
      setImagesUI(data.data.images.map((img) => `${baseUrl}/${img}`));
      setOgImages(data.data.images);
    });
  }, []);

  useEffect(() => {
    setProduct({ ...product, tags: tags });
  }, [tags]);

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
    setImagesUI((img) => img.concat(imagesArray));
    setProduct({ ...product, images: product.images.concat(filesArray) });
  }

  function DeleteImage(index) {
    setImagesUI((img) => img.filter((_, i) => i !== index));
    if (ogImages.includes(product.images[index])) {
      setDeleteImages((img) => img.concat(product.images[index]));
    }
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

  async function HandleSubmit() {
    try {
      await schemaProduct.validate(product, { abortEarly: false });

      let updatedProduct = {
        ...product,
      };

      if (JSON.stringify(ogImages) == JSON.stringify(product.images)) {
        updatedProduct = {
          ...product,
          deleteImages: deleteImages,
        };
      }

      const imagesToUpload = product.images.filter(
        (image) => !ogImages.includes(image)
      );

      const uploadedImages = product.images.filter(
        (img) => !imagesToUpload.includes(img)
      );

      const formData = new FormData();
      imagesToUpload.forEach((img) => {
        formData.append("images", img);
      });

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const uploadedImageNames = response.data;
      let imgsArray = uploadedImages.concat(uploadedImageNames);

      updatedProduct = {
        ...product,
        images: imgsArray,
        deleteImages: deleteImages,
      };

      await Update(`/editProduct/${productId}`, updatedProduct);

      Swal.fire("Succes", "Changes successfully saved", "success").then(() => {
        window.location = "/Products";
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        let message = "";
        error.inner.forEach((err) => {
          message += `<p>${err.message}<p/>`;
        });
        Swal.fire("Oops", message, "error");
      } else if (axios.isAxiosError(error)) {
        Swal.fire(
          "There was an error uploading the image(s)",
          error.message,
          "error"
        );
      } else {
        Swal.fire("Error", error.message, "error");
      }
      console.error("Error:", error);
    }
  }

  return (
    <Layout title={title} module={MODULES.PRODUCTS}>
      <div className="container-fluid">
        <div className="row clearfix d-flex justify-content-center">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <form className="card" noValidate autoSave="false" id="formData">
              <div className="body row">
                <div className="form-group mb-3 col-12">
                  <b>Name</b>
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
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-12">
                  <b>Description</b>
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
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Price</b>
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
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Discount</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="PrecioProdcuto"
                    name="discount"
                    id="discount"
                    value={product.discount}
                    onChange={HandleInputChange}
                  />
                  <small>Discount percentage</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Quantity</b>
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
                  <b>Brand</b>
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
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Category</b>
                  <select
                    className="custom-select"
                    id="category"
                    name="category"
                    required
                    defaultValue={product.category}
                    onChange={HandleInputChange}
                  >
                    <option value="Select a category" disabled>
                      Select a category
                    </option>
                    {categories.map((category) => (
                      <option key={category._id} value={category.category}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-12">
                  <b>Tags</b>
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
                    Press enter to add a tag
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
                  <b>Images</b>
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
                    onClick={() => HandleSubmit()}
                  >
                    Save changes
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
