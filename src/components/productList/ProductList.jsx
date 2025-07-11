import Product from "../product/product";

function ProductList({ products }) {
  return (
    <div className="container-fluid min-vh-100 py-4">
      <div className="row g-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
