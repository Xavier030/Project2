import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-3">World Travel</h5>
            <p className="text-grey">
              Creating unforgettable travel experiences since 2010. Our expert
              team curates the best vacation packages worldwide.
            </p>
          </div>
          <div className="col-md-2 col-6">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/" className="nav-link px-0">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/vacation" className="nav-link px-0">
                  Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/customer" className="nav-link px-0">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h6 className="text-white mb-3">Support</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/contact" className="nav-link px-0">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-white mb-3">Subscribe</h6>
            <p className="text-grey mb-3">
              Get exclusive travel deals and inspiration delivered to your
              inbox.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />
              <button className="btn btn-outline-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="my-4 text-white" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white">
              © 2025 World Travel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
