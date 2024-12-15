import { useParams } from "react-router-dom";
import { getSinglecart } from "../api/cart";
import { useQuery } from "@tanstack/react-query";

function Singlecart() {
  const params = useParams();
  const newParams = params.id;

  const {
    error,
    isLoading,
    isError,
    data: axiosData,
  } = useQuery({
    queryKey: ["cart", newParams],
    queryFn: () => getSinglecart(newParams),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  if (isError || error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-red-500">
          Error loading data!
        </p>
      </div>
    );
  }

  const { data } = axiosData;

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-md bg-gray-700 text-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Cart Details</h2>
        <div className="mb-4">
          <p>
            <span className="font-semibold">User ID:</span> {data.UserId}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {data.date}
          </p>
        </div>
        <div className="space-y-4">
          {data?.products?.map((product) => (
            <div
              key={product.productId}
              className="flex items-center p-3 border border-gray-700 rounded-md bg-gray-500"
            >
              <div>
                <p>
                  <span className="font-semibold">Product ID:</span>
                  {product.productId}
                </p>
                <p>
                  <span className="font-semibold">Quantity:</span>
                  {product.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Singlecart;
