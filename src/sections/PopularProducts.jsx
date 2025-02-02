import { products } from "../constants";
import PopularProductCard from "../component/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-center">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-center text-slate-grey font-montserrat max-sm:text-lg">
          Explore our most popular products that are loved by our customers. Discover the best deals and grab them while they last!
        </p>
      </div>
      <div className="grid gap-14 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 max-sm:mt-8">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;