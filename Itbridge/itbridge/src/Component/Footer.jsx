import { useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <footer>
      {location.pathname !== "/contact" && (
        <>
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 bg-[#8e0438] py-8 px-4">
            <div className="text-center md:text-left md:mb-0 mx-20">
              <h1 className="text-2xl font-bold text-white  ">
                Want to work together?
              </h1>
              <p className="mt-2 text-white">
                We are the perfect partner for your business.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28277.689627449083!2d85.50365186578503!3d27.633459648976384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f33b1a23b53%3A0xe8ec0b92bdf38a54!2sBanepa!5e0!3m2!1sen!2snp!4v1733123872860!5m2!1sen!2snp"
              height="200"
              allowFullScreen=""
              style={{ border: "0", marginTop: "10px" }}
              loading="lazy"
              className="rounded-lg shadow-md w-64 sm:w-52 lg:w-80 md:w-56"
            ></iframe>
          </div>

          <div className="bg-[#272526] py-8 px-4">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center md:text-center">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Company
                </h3>
                <ul>
                  <li>
                    <a href="/about" className="hover:underline text-gray-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/home" className="hover:underline text-gray-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:underline text-gray-400"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-center">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Support
                </h3>
                <ul>
                  <li>
                    <a href="#" className="hover:underline text-gray-400">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-400">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-400">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-center">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Contact
                </h3>
                <p className="text-gray-400">123 Cycle Street</p>
                <p className="text-gray-400">City, State, ZIP</p>
                <p className="text-gray-400">Email: support@yourbrand.com</p>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
