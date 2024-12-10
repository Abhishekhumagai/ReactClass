function Career() {
  return (
    <div className="flex flex-col gap-16 bg-gray-50 ">
      <div className="bg-[#9c9c9c] bg-[url('/image/computer.jpg')] bg-cover bg-center h-60 flex justify-center text-center about-image relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <h2 className="text-5xl  font-extrabold text-white tracking-wider relative">
          Career
        </h2>
      </div>

      <div className="text-gray-700 text-lg text-center md:text-left max-w-4xl mx-auto px-6">
        <p>
          IT-Bridge Nepal is a privately held company, consisting of a creative
          and multi-talented team comprised of web designers, web developers,
          and graphic designers. We provide a wide range of services, including
          web design, web development, mobile application development, web
          hosting, and consulting. IT-Bridge Nepal offers customer-oriented
          services and delivers creative and effective results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 my-10">
        {[
          {
            name: "DIGITAL MARKETING",
            description:
              "Providing innovative marketing solutions tailored to your business needs.",
            image: "../../public/image/software.jpg",
          },
          {
            name: "CLOUD COMPUTING",
            description:
              "Secure and scalable cloud solutions for seamless business operations.",
            image: "../../public/image/download.jpg",
          },
          {
            name: "IT CONSULTING",
            description:
              "Expert consulting services to empower your business through technology.",
            image: "../../public/image/digital.jpg",
          },
          {
            name: "MOBILE APP DEVELOPMENT",
            description:
              "Creating user-friendly and functional mobile applications.",
            image: "../../public/image/app.jpg",
          },
          {
            name: "WEBSITE DEVELOPMENT",
            description:
              "Designing and developing engaging websites that drive results.",
            image: "../../public/image/it.jpg",
          },
          {
            name: "CUSTOM SOFTWARE",
            description:
              "Building tailored software solutions to fit your unique requirements.",
            image: "../../public/image/website.jpg",
          },
        ].map((service, index) => (
          <figure
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6"
          >
            <img
              src={service.image}
              alt={`${service.name}`}
              className="w-60 h-60 object-cover rounded-lg shadow-md hover:scale-105 hover:rotate-1 hover:shadow-xl transition-transform duration-300 ease-in-out"
            />
            <figcaption className="text-center mt-4">
              <h3 className="text-xl font-bold text-gray-800">
                {service.name}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Career;
