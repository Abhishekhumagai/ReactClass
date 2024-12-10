import { useParams } from "react-router-dom";
import { getSinglecart } from "../api/cart";
import { useQuery } from "@tanstack/react-query";
function Singlecart() {
  const params = useParams();
  const newParams = params.id;
  console.log(newParams);
  const {
    error,
    isLoading,
    isError,
    isPending,
    data: axiosData,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getSinglecart(newParams),
  });
  if (isLoading || isPending) {
    return <div>loading.....</div>;
  }
  if (isError) {
    return <div>Error.....</div>;
  }
  const { data } = axiosData;
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>

      <div
        style={{
          margin: "10px",
          border: "2px solid black",
          width: "500px",
          backgroundColor: "gray",
        }}
      >
        <h2>{data.UserId}</h2>
        <p>{data.date}</p>
        <div>
          {data?.products?.map((product) => (
            <div key={product.productId}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "50px" }}
              />
              ProductId: <p>{product.productId}</p>
              product quantity: <p>{product.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <button onClick={fetchProducts}>Single Carts</button> */}
    </>
  );
}

export default Singlecart;
