import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getAllCategory,
  getAllProduct,
  getSingleCategory,
} from "../api/product";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const {
    error,
    isLoading,
    isError,
    isPending,
    data: axiosData,
  } = useQuery({
    queryKey: ["Product", selectedCategory],
    queryFn: () =>
      selectedCategory === "all"
        ? getAllProduct()
        : getSingleCategory(selectedCategory),
  });
  const {
    error: categoryError,
    isError: isCategoryError,
    isPending: isCategoryPending,
    isLoading: isCategoryLOADING,

    data: categoryAxiosData,
  } = useQuery({
    queryKey: ["allCategory"],
    queryFn: () => getAllCategory(),
  });
  const {
    error: singlecategoryError,
    isError: singleisCategoryError,
    isPending: singleisCategoryPending,
    data: singlecategoryAxiosData,
  } = useQuery({
    queryKey: ["Category"],
    queryFn: () => getSingleCategory(selectedCategory),
  });

  if (isLoading || isCategoryLOADING) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }
  if (isPending || isCategoryPending || singleisCategoryPending) {
    return <div>Pending.....</div>;
  }
  if (isError || isCategoryError || singleisCategoryError) {
    console.error(error, categoryError || singlecategoryError);
    return <div>{error}</div>;
  }

  const data = axiosData;
  const { data: singlecategory } = singlecategoryAxiosData;
  // console.log(singlecategoryAxiosData);
  const products = data?.map((product) => (
    <div
      key={product.id}
      className="border-2 border-gray-300 rounded-lg shadow-md p-4 m-4 h-96 transition-transform hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="h-40">
        <img
          src={product.image}
          className="w-full h-60  rounded-t-lg object-cover object-top"
        />
      </div>
      <div className="my-20 bg-whites">
        <h1 className="text-lg font-semibold mt-2">{product.title}</h1>
        <h2 className="text-gray-600 mt-1">${product.price}</h2>
        <h3 className="text-sm text-gray-500 mt-1">{product.category}</h3>
      </div>
    </div>
  ));
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen ">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          cursor: "pointer",
        }}
      >
        <div onClick={() => handleCategoryClick("all")}> all</div>
        {categoryAxiosData?.map((category, index) => (
          <div key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-4"></div>

      {error && (
        <div className="text-center text-red-600 font-medium mb-4">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products}
      </div>
    </div>
  );
}

export default Home;
