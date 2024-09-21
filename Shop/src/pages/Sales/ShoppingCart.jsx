import Layout from "../../components/Layout";
import { CloseIcon } from "../../assets/Icons";
export default function ShoppingCart() {
  function ProductRow() {
    return (
      <tr className="border-y">
        <td className="flex items-center p-4">
          <img
            src="images/phone.jpg"
            alt="Product"
            className="w-[100px] h-[100px] object-cover rounded"
          />
          <div className="ml-4">
            <p className="font-popins font-normal">Name</p>
            <a href="#" className="text-thcShpBlue">
              Remove
            </a>
          </div>
        </td>
        <td className="p-4">
          <span className="text-gray-600">$9.99</span>
        </td>
        <td className="p-4">
          <div className="flex flex-row justify-center items-center border  border-thcShpBlue rounded w-fit">
            <button className="px-3 py-1 text-thcShpBlue">+</button>
            <p className="px-3 py-1font-poppins font-normal text-center">0</p>
            <button className="px-3 py-1 text-thcShpBlue">-</button>
          </div>
        </td>
        <td className="p-4">
          <span className="text-gray-600">$9.99</span>
        </td>
      </tr>
    );
  }

  function ProductMBCard() {
    return (
      <div className="product-card relative flex flex-row m-4 border rounded w-full">
        <img
          src="/images/phone.jpg"
          alt="prod-image"
          className="w-[100px] h-[100px]  object-contain"
        />
        <div className=" flex flex-col text-start mx-4 py-3">
          <h3 className="font-poppins sm:text-[16px] text-[14px] font-semibold mb-2">
            Titulo
          </h3>
          <div className="flex flex-row">
            <div className="flex flex-row justify-center items-center  w-fit">
              <button className="px-2 py-1 text-thcShpBlue font-poppins font-medium text-[18px]">
                +
              </button>
              <p className="px-2 py-1 font-poppins font-normal text-center">
                0
              </p>
              <button className="px-2 py-1 text-thcShpBlue font-poppins font-medium text-[18px]">
                -
              </button>
            </div>
            <p className="px-2 py-1 font-poppins font-normal">$100</p>
          </div>
        </div>
        <button
          type="button"
          className="cursor-pointer absolute top-0 right-0 mt-2 mr-2"
        >
          <CloseIcon style="hover:text-red-500 sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]" />
        </button>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <section className="md:flex hidden flex-wrap flex-col p-10 justify-center ">
            <div className="flex flex-wrap flex-col text-center mb-6">
              <h3 className="font-poppins font-medium text-[20px]">
                Shopping Cart
              </h3>
              <a
                href="/"
                className="font-poppins font-normal cursor-pointer text-[14px] text-tchShpLigthBlue mt-2"
              >
                Back to shopping
              </a>
            </div>
            <div className="flex flex-col justify-content-center mt-6">
              <table className="border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="p-4 font-popins font-normal">Product</th>
                    <th className="p-4 font-popins font-normal">Price</th>
                    <th className="p-4 font-popins font-normal">Quantity</th>
                    <th className="p-4 font-popins font-normal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <ProductRow />
                  <ProductRow />
                </tbody>
              </table>
            </div>
            <div className="flex flex-row mt-6 justify-end">
              <div className="flex flex-col text-end px-10">
                <div className="flex flex-row">
                  <p className="mr-5">Sub-total</p>
                  <p>$100</p>
                </div>
                <small className="font-poppins text-gray-400">
                  Tax and shipping cost will be calculated later
                </small>
              </div>
              <button className="bg-thcShpBlue text-white w-[140px] h-[40px] rounded">
                Check-out
              </button>
            </div>
          </section>
          {/* Shopping cart for mobile */}
          <section className="md:hidden flex flex-col justify-center p-5">
            <div className="flex flex-col justify-center items-center pb-[60px]">
              <ProductMBCard />
            </div>
            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300 shadow-lg z-1">
              <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-medium">
                  <p>
                    Subtotal: <span className="text-thcShpBlue">$19.98</span>
                  </p>
                </div>
                {/* TODO: Modal donde se confirme el carrito y se muestre el mensanje "Tax and shipping cost will be calculated later" */}
                <button className="bg-thcShpBlue text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-tchShpLigthBlue transition duration-200">
                  Checkout
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
