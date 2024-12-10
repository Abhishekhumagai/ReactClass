import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Contact() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);

  const dialogvar = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    dialogvar.current.show();
  };

  const closeModal = () => {
    dialogvar.current.close();
    setSelectedProduct(null);
  };
  const handleSearch = (e) => {
    setData(
      mainData.filter((u) =>
        u.username.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    console.log(e.target.value);
  };

  async function fetchUser() {
    try {
      const response = await axios(apiUrl + "users");
      setData(response.data);
      setMainData(response.data);
    } catch (e) {
      setError("Failed to fetch products. Please try again later." + e);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const products = data.map((product) => (
    <tr
      key={product.id}
      className="border-b hover:bg-gray-100 cursor-pointer"
      onClick={() => openModal(product)}
    >
      <td className="py-2 px-4 text-center">{product.id}</td>
      <td className="py-2 px-4">{product.username}</td>
      <td className="py-2 px-4">{product.phone}</td>
      <td className="py-2 px-4">{product.address.city}</td>
      <td className="py-2 px-4">Lat: {product.address.geolocation.lat}</td>
      <td className="py-2 px-4">Lon: {product.address.geolocation.long}</td>
    </tr>
  ));

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Input and Error Message */}
      <div className="flex flex-col items-center mb-6 ">
        <input
          size="small"
          placeholder="Enter your name"
          type="text"
          className="p-2 border rounded-md w-full max-w-sm mb-2"
          onChange={handleSearch}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </div>

      {/* Table */}
      {data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Username</th>
                <th className="py-2 px-4 text-left">Phone</th>
                <th className="py-2 px-4 text-left">City</th>
                <th className="py-2 px-4 text-left">Address (Lat)</th>
                <th className="py-2 px-4 text-left">Address (Lon)</th>
              </tr>
            </thead>
            <tbody>{products}</tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500">No data available</div>
      )}

      {selectedProduct && (
        <dialog
          ref={dialogvar}
          className="rounded-lg absolute top-56 bg-white shadow-lg max-w-md mx-auto"
        >
          <button
            onClick={closeModal}
            className="absolute  right-2 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
          <div className="text-center p-10">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <p className="mb-2">ID: {selectedProduct.id}</p>
            <p className="mb-2">Username: {selectedProduct.username}</p>
            <p className="mb-2">Phone: {selectedProduct.phone}</p>
            <p className="mb-2">Email: {selectedProduct.email}</p>
            <p className="mb-2">City: {selectedProduct.address.city}</p>
            <p className="mb-2">
              Lat: {selectedProduct.address.geolocation.lat}
            </p>
            <p className="mb-2">
              Lon: {selectedProduct.address.geolocation.long}
            </p>
            <p className="mb-2">Firstname: {selectedProduct.name.firstname}</p>
            <p>Lastname: {selectedProduct.name.lastname}</p>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Contact;
