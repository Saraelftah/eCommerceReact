import { useEffect, useState } from "react";
import notFound from "../../assets/notFound.png";
import Product from "../product/product";
import Search from "../search/Search";

function ProductList({ products }) {

  const [displayProducts, setDisplayProducts] = useState(products);

   useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  return (
    <>
      <Search products={products} setFiltered={setDisplayProducts}/>

      <div className="container-fluid min-vh-100 py-4">
        <div className="row g-4">
          {displayProducts.length > 0 ? (
            displayProducts.map((product) => (
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
