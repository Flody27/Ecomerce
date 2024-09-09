import { Eye, ShoppingCartIcon } from "../assets/Icons";

export default function ProductCard() {
  return (
    <div className="relative flex flex-col m-4 max-w-[250px] shadow-md">
      <div className="relative">
        <img
          src="images/phone.jpg"
          alt="productImage"
          className="w-[250px] h-[250px] object-contain"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-1 flex flex-row items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="w-10 h-10 rounded-full hover:border-2 hover:border-white text-white flex items-center justify-center transition-colors duration-300 m-2">
            <Eye />
          </button>
          <button className="w-10 h-10 rounded-full hover:border-2 hover:border-white text-white flex items-center justify-center transition-colors duration-300  m-2">
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <a href="#">
          <p className="font-poppins font-medium text-[16px] text-start">
            Name
          </p>
          <p className="font-poppins font-normal text-[16px] text-end text-tchShpLigthBlue">
            $100
          </p>
        </a>
      </div>
    </div>
  );
}
