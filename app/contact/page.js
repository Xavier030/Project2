"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../../app/globals.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - World Travel</title>
        <meta
          name="description"
          content="Get in touch with our travel experts"
        />
        {/* Bootstrap CSS link in Head */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Bootstrap JS script at the end of body */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossOrigin="anonymous"
        async
      ></script>

      <Navbar />

      {/* Hero Section */}
      <section className="hero-section bgimg4">
        <div className="container">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            Have questions? We're here to help you plan your perfect vacation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  <h3 className="mb-4">Send us a Message</h3>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-control"
                          placeholder="Enter your phone"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="form-control"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="form-control"
                          rows="5"
                          placeholder="Tell us about your travel plans..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary px-5 py-3"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body p-4">
                  <h3 className="mb-4">Contact Information</h3>

                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-circle bg-primary text-white me-3">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <h6 className="mb-0">Our Location</h6>
                    </div>
                    <p className="text-muted ms-5">
                      98 West 21th Street, Suite 721
                      <br />
                      New York NY 10016
                    </p>
                  </div>

                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-circle bg-success text-white me-3">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <h6 className="mb-0">Phone Number</h6>
                    </div>
                    <p className="text-muted ms-5">(+1) 435 3533</p>
                  </div>

                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-circle bg-warning text-white me-3">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <h6 className="mb-0">Email Address</h6>
                    </div>
                    <p className="text-muted ms-5">info@worldtravel.com</p>
                  </div>

                  <div className="contact-item">
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-circle bg-info text-white me-3">
                        <i className="bi bi-clock"></i>
                      </div>
                      <h6 className="mb-0">Business Hours</h6>
                    </div>
                    <p className="text-muted ms-5">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat: 10:00 AM - 4:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Find Us Here</h2>
          <div className="card border-0 shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.372421737778!2d-114.08863112377513!3d51.06467487171598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f0056f4cc83%3A0xf8a35d39cfc7c508!2sSAIT%20Polytechnic%20-%20Parking%20P9!5e0!3m2!1sen!2sca!4v1757892122114!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .hero-section {
          min-height: 400px;
          display: flex;
          align-items: center;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
            url("/images/view4.avif") center/cover no-repeat;
          color: white;
          text-align: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .section {
          padding: 5rem 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: var(--dark-color);
        }

        .icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item {
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 8px;
        }

        .contact-item:hover {
          transform: translateX(5px);
          background: rgba(0, 0, 0, 0.02);
        }

        .map-iframe {
          filter: grayscale(20%) contrast(1.2);
          min-height: 400px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
