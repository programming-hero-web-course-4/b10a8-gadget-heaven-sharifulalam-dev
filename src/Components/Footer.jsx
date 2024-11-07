export default function Footer() {
  return (
    <>
      <footer className="bg-white py-8 mt-16">
        <div className="w-11/12 mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold">Gadget Heaven</h4>
          <p className="text-gray-500 mt-2">
            Leading the way in cutting-edge technology and innovation.
          </p>
          <hr className="max-w-7xl mx-auto my-8" />
          <div className="flex justify-center space-x-16 mt-6">
            <div>
              <h5 className="font-semibold">Services</h5>
              <ul className="text-gray-500 mt-2 space-y-1">
                <li>Product Support</li>
                <li>Order Tracking</li>
                <li>Shipping & Delivery</li>
                <li>Returns</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Company</h5>
              <ul className="text-gray-500 mt-2 space-y-1">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Legal</h5>
              <ul className="text-gray-500 mt-2 space-y-1">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
