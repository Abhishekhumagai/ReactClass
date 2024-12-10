function About() {
  return (
    <div className="font-sans">
      <div className="bg-[#9c9c9c] bg-[url('/image/computer.jpg')] bg-cover bg-center h-60 flex justify-center text-center about-image relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <h2 className="text-5xl  font-extrabold text-white tracking-wider relative">
          About
        </h2>
      </div>

      <div className="py-16 px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="../../public/image/it.jpg"
                alt="Company Illustration"
                className="object-cover w-full h-96"
              />
            </div>
          </div>

          <div className="lg:w-1/2 text-gray-800">
            <h2 className="text-4xl font-bold text-black mb-4">Our Company</h2>
            <p className="text-lg leading-8 mb-8">
              IT-Bridge Nepal is a privately held company, consisting of a
              creative and multi-talented team comprised of web designers, web
              developers, and graphic designers. We provide a wide range of
              services, including web design, development, mobile application
              development, web hosting, and consulting. IT-Bridge Nepal offers
              customer-oriented services and delivers creative and effective
              results.
            </p>

            <h2 className="text-4xl font-bold text-black mb-4">Vision</h2>
            <p className="text-lg leading-8 mb-8">
              To be at the forefront of application development and be respected
              for setting the highest standards of professionalism and quality
              of service.
            </p>

            <h2 className="text-4xl font-bold text-black mb-4">
              Why Choose Us?
            </h2>
            <ul className=" pl-6 text-lg leading-8 space-y-2">
              <li>Avoid the Risk</li>
              <li>Follow Conceptual Integrity</li>
              <li>Process Control</li>
              <li>Inspection and Testing</li>
              <li>Product Cost and Quality</li>
              <li>On-Time Delivery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover the passionate professionals driving innovation at
            IT-Bridge Nepal.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Abhishek", "Samir", "Ashim", "Anish"].map((name, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={`/public/image/built.png`}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">CEO</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
