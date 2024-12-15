import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";

const OurWork = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = "https://itbridge.com.np/api/";
  async function ItWork() {
    try {
      const response = await fetch(`${BASE_URL}work`, {
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data, status: " + response.status);
      }

      const finaldata = await response.json();
      setData(finaldata.data); // Assuming the response contains 'data' array
    } catch (error) {
      setError("Failed to load services. Please try again later.");
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    ItWork();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Loading services...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-600">
        {error}
      </div>
    );
  }
  return (
    <div className="bg-gray-100  ">
      <div className=" mx-auto   ">
        <div className="bg-[#9c9c9c] bg-[url('/image/computer.jpg')] bg-cover bg-center h-60 flex justify-center text-center about-image relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <h2 className="text-5xl  font-extrabold text-white tracking-wider relative">
            Our Work
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 ">
          {data.map((project) => (
            <div
              key={project.status}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mx-10 my-10"
            >
              <img
                src={project.photo}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="mx-4 flex justify-between my-3 ">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <h3 className="text-xl font-semibold">{project.alias}</h3>
                <h3 className="text-xl font-semibold">{project.slug}</h3>

                <NavLink to={"/ourworkdes/" + project.id}>
                  <button>
                    <li className="text-blue-500 hover:text-blue-700  block  ">
                      Learn More →
                    </li>
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
