import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://itbridge.com.np/api/";

function OurserviceDes() {
  const { serviceName } = useParams();
  const [service, setService] = useState(null);

  async function ItService() {
    try {
      const response = await fetch(`${BASE_URL}service`, {
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data, status: " + response.status);
      }

      const finaldata = await response.json();
      const foundService = finaldata.data.find(
        (service) => service.slug === serviceName
      );
      setService(foundService);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    ItService();
  }, [serviceName]);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="service-details bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl mb-8">
          <img
            src={service.photo}
            alt={service.title}
            className="w-full h-96 object-cover rounded-lg mb-6 shadow-lg"
          />
          <h1 className="text-4xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
            {service.title}
          </h1>
          <p
            className="text-lg text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: service.excerpt }}
          />
        </div>

        <ul className="list-disc pl-5 space-y-4 text-lg text-gray-600">
          {service.features &&
            service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center transition-transform transform hover:translate-x-2 hover:text-blue-500"
              >
                <span className="mr-3 text-blue-500">•</span>
                {feature}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default OurserviceDes;
