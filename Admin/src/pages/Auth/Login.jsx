import { useState } from "react";
// import Swal from "sweetalert2";
import { PostUsingCookies } from "../../Services/Api";


export default function Login() {
  const title = "TechShop - Login";
  window.document.title = title;

  const [user, setUser] = useState({ email: "", password: "" });

  async function HandleSubmit() {
    // TODO: Validaciones
    // TODO: Sweetalert
    await PostUsingCookies(`/Login`, user, { withCredentials: true })
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const HandleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4">
          <h3 className="card-title text-center">Login</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={HandleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={HandleInputChange}
                required
              />
            </div>
            <button
              type="button"
              onClick={HandleSubmit}
              className="btn btn-primary btn-block"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
