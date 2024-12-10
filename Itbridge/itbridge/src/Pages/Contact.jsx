const Contact = () => {
  return (
    <div className="min-h-screen text-black">
      <div className="text-center bg-[#9c9c9c] h-60 mb-12  bg-[url('/image/contact.jpg')] bg-cover bg-center flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white ">Contact</h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-semibold text-lg">
            Contact us about anything related to our company or services.
            <br /> We will do our best to get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="space-y-6 bg-white p-6 md:p-8 rounded-md shadow-md">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Please enter your name"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@mail.com"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 234 567 890"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="space-y-6 text-center lg:text-left">
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-bold mb-4">Contact Details</h3>
              <p className="text-sm">
                <strong>Phone:</strong> +1 234 567 890
              </p>
              <p className="text-sm mt-2">
                <strong>Email:</strong> contact@company.com
              </p>
              <p className="text-sm mt-2">
                <strong>Address:</strong> 123 Business St, Cityville, Country
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28277.689627449083!2d85.50365186578503!3d27.633459648976384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f33b1a23b53%3A0xe8ec0b92bdf38a54!2sBanepa!5e0!3m2!1sen!2snp!4v1733123872860!5m2!1sen!2snp"
              height="200"
              className="w-full  h-[420px] rounded-lg shadow-md"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
