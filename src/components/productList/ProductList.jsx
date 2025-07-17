import { useEffect, useState } from "react";
import banner from "../../assets/banner.png";
import notFound from "../../assets/notFound.png";
import Product from "../product/product";
import Search from "../search/Search";

function ProductList({ products }) {

  const [filteredProducts, setFilteredProducts] = useState(products);

   useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  function handleSearch(query) {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  return (
    <>
      <img src={banner} alt="Banner" className="img-fluid mb-4 mt-1" />
      <Search onSearch={handleSearch} />

      <div className="container-fluid min-vh-100 py-4">
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <div className="w-100 d-flex justify-content-center">
              <img
                src={notFound}
                alt="not found "
                className="img-fluid mb-4 mt-1"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
