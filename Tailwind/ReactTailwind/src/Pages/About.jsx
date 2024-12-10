import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function About() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await axios(apiUrl + "Carts");
      setData(response.data);
    } catch (e) {
      setError(
        "Failed to fetch products. Please try again later. " + e.message
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const products = data?.map((Carts) => (
    <NavLink
      key={Carts.id}
      to={"/Carts/" + `${Carts.id}`}
      className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Cart ID: {Carts.id}
        </h2>
        <p className="text-sm text-gray-500 mb-4">Date: {Carts.date}</p>
        <div className="space-y-2">
          {Carts.products.map((product) => (
            <div
              className="p-3 bg-gray-50 rounded-lg border border-gray-200"
              key={product.productId}
            >
              <p className="text-sm text-gray-800">
                <span className="font-semibold">Product ID:</span>{" "}
                {product.productId}
              </p>
              <p className="text-sm text-gray-800">
                <span className="font-semibold">Quantity:</span>{" "}
                {product.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </NavLink>
  ));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products}
      </div>
      {loading && (
        <div className="text-center text-gray-600 font-medium mb-4">
          Loading Carts...
        </div>
      )}
    </div>
  );
}

export default About;
