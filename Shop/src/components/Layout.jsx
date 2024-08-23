import { useState } from "react";
import {
  CloseIcon,
  MenuIcon,
  ShoppingCartIcon,
  UserIcon,
} from "../assets/Icons";

export default function Layout({ children }) {
  // TODO: Declarar paleta de colores para crear los hover
  const liStyle =
    "font-poppins font-normal cursor-pointer text-[16px] hover:text-primaryBlue";
  const [menu, setMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const ProductCard = () => (
    <div className="product-card relative flex flex-row m-4 py-3 border-t-2">
      <img
        src="/images/phone.jpg"
        alt="prod-image"
        className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] object-contain"
      />
      <div className=" flex flex-col text-start mx-4">
        <h3 className="font-poppins sm:text-[16px] text-[14px] font-semibold mb-2">
          Titulo
        </h3>
        <p className="font-poppins sm:text-[14px] text-[12px] font-normal">
          1 X $100
        </p>
      </div>
      <button
        type="button"
        className="cursor-pointer absolute top-0 right-0 mt-2 mr-2"
      >
        <CloseIcon style="hover:text-red-500 sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]" />
      </button>
    </div>
  );

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="lg:px-16 px-6 flex justify-center items-center bg-white">
          <div className="xl:max-w-[1280px] w-full">
            <nav className="w-full flex py-6 justify-between items-center flex-row navbar">
              {/* Mobile Menu */}
              <div className="sm:hidden flex flex-1 justify-start items-center">
                <button type="button" onClick={() => setMenu((prev) => !prev)}>
                  <MenuIcon />
                </button>

                <div
                  className={`${
                    menu ? "flex" : "hidden"
                  } absolute top-0 left-0 z-[3] bg-[#0e0e0e37] w-full h-full`}
                >
                  <div className="h-full w-[75%] absolute bg-white top-0 left-0 text-center  p-2">
                    <div className="flex justify-start items-center">
                      <button
                        type="button"
                        onClick={() => setMenu((prev) => !prev)}
                      >
                        <CloseIcon style="cursor-pointer hover:text-red-500" />
                      </button>
                    </div>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                      <li className={`${liStyle} mb-4`}>
                        <a href="#">Products</a>
                      </li>
                      <li className={`${liStyle} mb-4`}>
                        <a href="#">About us</a>
                      </li>
                      <li className={`${liStyle} mb-4`}>
                        <a href="#">Contact us</a>
                      </li>
                      <li className={`${liStyle} mb-4`}>
                        <a href="#">User</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <a href="/" className="flex flex-row md:flex-grow">
                <img
                  src="../images/logo.png"
                  alt="logo"
                  className="max-w-[124px] max-h-[32px] object-contain"
                />
                <h1 className="font-poppins text-2xl">
                  <b>Tech</b>Shop
                </h1>
              </a>
              {/* Desktop Menu */}
              <ul className="list-none sm:flex hidden justify-center items-center flex-grow ">
                <li className={`${liStyle} mr-10`}>
                  <a href="#">Products</a>
                </li>
                <li className={`${liStyle} mr-10`}>
                  <a href="#">About us</a>
                </li>
                <li className={liStyle}>
                  <a href="#">Contact us</a>
                </li>
              </ul>
              <ul className="list-none sm:flex hidden justify-end items-center flex-grow">
                <li className={`${liStyle} mr-10 relative`}>
                  <a href="#">
                    <UserIcon />
                  </a>
                </li>
                <li className={liStyle}>
                  <button
                    type="button"
                    onClick={() => setShowCart((prev) => !prev)}
                  >
                    <ShoppingCartIcon />
                  </button>
                </li>
              </ul>
              {/* Cart button mobile */}
              <div className="sm:hidden flex flex-1 justify-end items-center">
                <button
                  type="button"
                  onClick={() => setShowCart((prev) => !prev)}
                >
                  <ShoppingCartIcon />
                </button>
              </div>
              {/* Shopcart */}
              <div
                className={`${
                  showCart ? "flex" : "hidden"
                } absolute top-0 right-0 z-[3] bg-[#0e0e0e37] w-full h-full`}
              >
                <div className="h-full sm:w-[50%] w-[75%] absolute bg-white top-0 right-0 text-center  p-4">
                  <div className="flex justify-start items-center">
                    <button
                      type="button"
                      onClick={() => setShowCart((prev) => !prev)}
                    >
                      <CloseIcon style="cursor-pointer hover:text-red-500" />
                    </button>
                  </div>
                  <div className="cart-products flex flex-col h-[80%] overflow-auto">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
                    <button
                      type="button"
                      className="bg-primaryBlue text-white rounded-[5px] p-2 w-full hover:bg-cyan-900"
                    >
                      <a href="#">Shopping Cart</a>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
