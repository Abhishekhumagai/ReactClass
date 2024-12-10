import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../api/product";

function AllCategory() {
  const {
    error,
    isLoading,
    isError,
    isPending,
    data: axiosData,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getAllCategory(),
  });
  if (isLoading || isPending) {
    return <div>loading.....</div>;
  }
  if (isError) {
    return <div>Error.....</div>;
  }
  const { data } = axiosData;
  const products = data?.map((product, index) => (
    <div style={{ margin: "10px" }} key={index}>
      <div>{product}</div>
    </div>
  ));

  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      {products}
    </>
  );
}

export default AllCategory;
