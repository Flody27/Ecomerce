import Layout from "../components/Layout";
// import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
("../components/ProductCard");

export default function Home() {
  return (
    <Layout>
      {/* <Hero /> */}
      {/* Products Section */}
      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <section className="flex flex-wrap flex-row sm:py-16 py-6 justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </section>
        </div>
      </div>
    </Layout>
  );
}
