import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../ratingStars/Rating";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Faild to fetch product");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loadind...</div>;
  if (error) return <div>{error}</div>;
  if (!product) {
    return (
      <div className="text-center py-5">
        <FontAwesomeIcon icon={faBoxOpen} size="5x" style={{ color: "#ccc" }} />
        <p className="mt-3 text-muted">No product found.</p>
      </div>
    );
  }

  return (
    <div className="container py-4 bg-light mt-5 rounded d-flex justify-content-between">
      <div className="w-50">
        <h2 className="mb-4 fw-bold">{product.title}</h2>
        <p className="mt-3">{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Rating:</strong> <Rating value={product.rating} />{" "}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}{" "}
        </p>
        <p>
          <strong>Category:</strong> {product.category}{" "}
        </p>
      </div>

      <img
        src={product.images[0]}
        alt={product.title}
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
}

export default ProductDetails;
