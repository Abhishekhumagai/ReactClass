import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api/product";

function SingleProduct() {
  const params = useParams();
  const newParams = params.id;
  const {
    error,
    isLoading,
    isError,
    isPending,
    data: axiosData,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getSingleProduct(newParams),
  });
  if (isLoading || isPending) {
    return <div>loading.....</div>;
  }
  if (isError) {
    return <div>Error.....</div>;
  }
  const { data } = axiosData;

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      {error && <div className="text-red-500 text-lg mb-4">{error}</div>}

      {data && (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
          <img
            src={data.image}
            alt={data.title}
            className="rounded-md object-cover w-full h-full mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
          <h2 className="text-xl text-gray-700 mb-2">{data.title}</h2>
          <p className="text-gray-500 text-lg mb-2">{data.category}</p>
          <p className="text-gray-800 mb-4">{data.description}</p>
          <h3 className="text-xl font-semibold text-green-600 mb-6">
            ${data.price}
          </h3>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
