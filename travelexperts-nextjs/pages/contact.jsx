import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - World Travel</title>
        <meta
          name="description"
          content="Get in touch with our travel experts"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="container-home bgimg4">
        <div className="row justify-content-center align-items-center content-mid">
          <div className="col-md-10 text-center">
            <h1 className="top-heading">Contact Us</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-md-5">
              <div className="contact-info ps-md-5 mt-4 mt-md-0">
                <h3>Our Location</h3>
                <p>
                  <span>Address:</span> 98 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
                <p>
                  <span>Phone:</span> (+1) 435 3533
                </p>
                <p>
                  <span>Email:</span> info@yourdomain.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="container mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.372421737778!2d-114.08863112377513!3d51.06467487171598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f0056f4cc83%3A0xf8a35d39cfc7c508!2sSAIT%20Polytechnic%20-%20Parking%20P9!5e0!3m2!1sen!2sca!4v1757892122114!5m2!1sen!2sca"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}
