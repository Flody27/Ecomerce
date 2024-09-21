import Layout from "../../components/Layout";

export default function Paycheck() {
  function ProductCard() {
    return (
      <div className="flex items-start mb-4">
        <div className="relative mr-5">
          <img
            src="images/phone.jpg"
            alt=""
            className="w-[100px] h-[100px] object-cover"
          />
          <span className="absolute top-0 right-0 bg-thcShpBlue text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
            1
          </span>
        </div>
        <div className="ml-4">
          <h2 className="text-[16px] font-medium font-poppins">Producto</h2>
          <p className="text-[16px] font-medium font-poppins text-thcShpBlue">
            $9.99
          </p>
        </div>
      </div>
    );
  }

  return (
    // Textbox Address Select para pais y provincia
    // Agregar los demas formularios
    <Layout>
      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <section className="flex flex-row  justify-center">
            {/* Address Info */}
            <div className="w-[50%] flex flex-col p-5 hidden">
              <b className="font-poppins font-medium text-[18px]">
                Shipping Address
              </b>
              <div className="flex flex-col mt-5">
                <div className="flex flex-row">
                  <input
                    type="text"
                    className="border p-2 mr-1 w-full focus:border-thcShpBlue focus:outline-none"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="border p-2 ml-1 w-full focus:border-thcShpBlue focus:outline-none"
                    placeholder="Last name"
                  />
                </div>
                <input
                  type="text"
                  className="border p-2 mr-1 w-full focus:border-thcShpBlue focus:outline-none my-2"
                  placeholder="Address"
                />
                <div className="flex flex-row">
                  <input
                    type="text"
                    className="border p-2 mr-1 w-full focus:border-thcShpBlue focus:outline-none"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    className="border p-2 ml-1 w-full focus:border-thcShpBlue focus:outline-none"
                    placeholder="Postal Code"
                  />
                  <input
                    type="text"
                    className="border p-2 ml-1 w-full focus:border-thcShpBlue focus:outline-none"
                    placeholder="Province"
                  />
                </div>
                <input
                  type="text"
                  className="border p-2 mr-1 w-full focus:border-thcShpBlue focus:outline-none my-2"
                  placeholder="Country"
                />
              </div>
              <div className="flex flex-row justify-between">
                <button className="w-[140px] h-[40px] underline text-tchShpLigthBlue text-start">
                  Cancel
                </button>
                <button className="bg-thcShpBlue text-white w-[140px] h-[40px] rounded">
                  Next
                </button>
              </div>
            </div>
            {/* TODO: Agregar iconos fijarse en figma */}
            {/* Payment Method */}
            <div className="w-[50%] flex flex-col p-5">
              <b className="font-poppins font-medium text-[18px]">
                Payment Method
              </b>
              <div className="flex flex-col my-5 border rounded">
                <div className="flex flex-row bg-[#D1E6F0] p-4">
                  <p className="font-poppins font-normal text-[15px] text-[#336479]">
                    Credit Card
                  </p>
                </div>
                <div className="flex flex-col p-4">
                  <input
                    type="text"
                    className="border p-2 mr-1 w-full focus:border-thcShpBlue focus:outline-none my-2"
                    placeholder="Card Number"
                  />
                  <input
                    type="text"
                    className="border p-2 mr-1 w-full focus:border-thcShpBlue focus:outline-none my-2"
                    placeholder="Holder Name"
                  />
                  <div className="flex flex-row">
                    <input
                      type="text"
                      className="border p-2 mr-1 w-full focus:border-thcShpBlue focus:outline-none"
                      placeholder="Expiration (MM/YY)"
                    />
                    <input
                      type="text"
                      className="border p-2 ml-1 w-full focus:border-thcShpBlue focus:outline-none"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <button className="w-[140px] h-[40px] underline text-tchShpLigthBlue text-start">
                  Cancel
                </button>
                <button className="bg-thcShpBlue text-white w-[140px] h-[40px] rounded">
                  Next
                </button>
              </div>
            </div>

            {/* Order recap */}
            <div className="w-[50%] bg-[#efefef4f] flex flex-col p-5">
              <div className="flex flex-col ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>

              <div className="flex flex-row items-center border-t border-gray-300 py-6">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="border rounded p-2 w-full focus:border-[#2A678C] focus:outline-none"
                />
                <button
                  className="ml-2 bg-tchShpLigthBlue text-tchShpWhite h-[40px] w-[120px] 
                px-4 py-2 rounded"
                >
                  Add code
                </button>
              </div>

              <div className="border-t border-gray-300">
                <div className="flex justify-between mb-2 pt-6">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">$9.99</span>
                </div>
                <div className="flex justify-between pb-6">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-500">
                    Calculated at the next step
                  </span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-6">
                  <span className="text-[17px] font-poppins font-semibold">
                    Total
                  </span>
                  <span className="text-[17px] font-poppins font-semibold">
                    $9.99
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
