function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold">CYCLE RENTAL</h1>
            <p className="mt-2 text-gray-400">
              Simplify your cycling rental experience. Always on the go!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-8 text-sm space-y-8 md:space-y-0 ">
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li>
                <a href="/about" className="hover:underline text-gray-400">
                  cart
                </a>
              </li>
              <li>
                <a href="/home" className="hover:underline text-gray-400">
                  Producrt
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-400">
                  User
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/Terms" className="hover:underline text-gray-400">
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
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">123 Cycle Street</p>
            <p className="text-gray-400">City, State, ZIP</p>
            <p className="text-gray-400">Email: support@yourbrand.com</p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} CYCLE RENTAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
