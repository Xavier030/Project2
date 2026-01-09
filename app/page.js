"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../app/globals.css";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tickets");

  const featuredPackages = [
    {
      id: 1,
      image: "/images/view1.avif",
      title: "Serene Forest Retreat",
      description:
        "Escape to lush green forests where towering trees create a natural canopy.",
      price: 899,
      duration: "3 Nights",
      rating: 4.8,
      tag: "Nature",
    },
    {
      id: 2,
      image: "/images/view2.avif",
      title: "Mountain Adventure",
      description:
        "Experience breathtaking mountain vistas with crisp air and stunning landscapes.",
      price: 1299,
      duration: "4 Nights",
      rating: 4.9,
      tag: "Adventure",
    },
    {
      id: 3,
      image: "/images/view3.avif",
      title: "Beach Paradise",
      description: "Relax on pristine sandy beaches with turquoise waters.",
      price: 1499,
      duration: "5 Nights",
      rating: 4.7,
      tag: "Beach",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      text: "The best travel experience I've ever had! Everything was perfectly organized.",
      avatar: "/images/avatar1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frequent Traveler",
      text: "Excellent service and amazing destinations. Highly recommended!",
      avatar: "/images/avatar2.jpg",
    },
  ];

  return (
    <div>
      <Head>
        <title>World Travel - Discover Your Next Adventure</title>
        <meta
          name="description"
          content="Explore amazing vacation packages and plan your perfect getaway"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section bg-gradient"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <h1 className="hero-title">Discover Your Next Adventure</h1>
          <p className="hero-subtitle">
            Where is your dream vacation? Explore our curated packages and start
            planning today!
          </p>
          <Link
            href="/vacation"
            className="btn btn-primary btn-lg px-5 py-3 mt-3"
          >
            Explore Packages
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-5">
        {/* Tabs */}
        <div className="tabs mb-5">
          <div
            className="nav nav-pills justify-content-center"
            style={{ gap: "1rem" }}
          >
            <button
              className={`nav-link ${activeTab === "tickets" ? "active" : ""}`}
              onClick={() => setActiveTab("tickets")}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "50px",
                border: "2px solid var(--primary-color)",
                background:
                  activeTab === "tickets"
                    ? "linear-gradient(135deg, var(--primary-color), var(--secondary-color))"
                    : "transparent",
                color:
                  activeTab === "tickets" ? "white" : "var(--primary-color)",
              }}
            >
              Featured Packages
            </button>
            <button
              className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "50px",
                border: "2px solid var(--primary-color)",
                background:
                  activeTab === "reviews"
                    ? "linear-gradient(135deg, var(--primary-color), var(--secondary-color))"
                    : "transparent",
                color:
                  activeTab === "reviews" ? "white" : "var(--primary-color)",
              }}
            >
              Customer Reviews
            </button>
          </div>
        </div>

        {/* Featured Packages */}
        {activeTab === "tickets" && (
          <div className="row g-4">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="col-md-4">
                <div className="card h-100 border-0 shadow-lg hover-lift">
                  <div
                    className="position-relative"
                    style={{ height: "200px" }}
                  >
                    <div
                      style={{
                        height: "100%",
                        background: `url(${pkg.image}) center/cover`,
                      }}
                    />
                    <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-3">
                      {pkg.tag}
                    </span>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title mb-0">{pkg.title}</h5>
                      <span className="badge bg-light text-primary">
                        ⭐ {pkg.rating}
                      </span>
                    </div>
                    <p className="card-text text-muted small">
                      {pkg.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <h4 className="text-primary mb-0">${pkg.price}</h4>
                        <small className="text-muted">{pkg.duration}</small>
                      </div>
                      <Link href="/vacation" className="btn btn-primary btn-sm">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials */}
        {activeTab === "reviews" && (
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-6">
                <div className="card border-0 shadow-lg h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "#e2e8f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.5rem",
                          color: "var(--primary-color)",
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                    <p className="card-text text-muted mb-3 fst-italic">
                      "{testimonial.text}"
                    </p>
                    <div className="text-warning">{"★".repeat(5)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search Form */}
        <div className="card border-0 shadow-lg mt-5">
          <div className="card-body p-4">
            <h3 className="card-title text-center mb-4">
              Find Your Perfect Getaway
            </h3>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Where would you like to go?"
                />
              </div>
              <div className="col-md-2">
                <label className="form-label">Check-in</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-2">
                <label className="form-label">Check-out</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-2">
                <label className="form-label">Travelers</label>
                <select className="form-select">
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3 Travelers</option>
                  <option>4+ Travelers</option>
                </select>
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-primary w-100 py-3">
                  <i className="bi bi-search me-2"></i>
                  Search Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Why Choose World Travel</h2>
            <p className="text-muted">
              Experience the difference with our premium travel services
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="text-center p-4">
                <div
                  className="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="bi bi-shield-check fs-3 text-primary"></i>
                </div>
                <h5 className="fw-bold mb-2">Best Price Guarantee</h5>
                <p className="text-muted small">
                  Find a lower price? We'll match it and give you extra credit.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center p-4">
                <div
                  className="icon-wrapper bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="bi bi-headset fs-3 text-success"></i>
                </div>
                <h5 className="fw-bold mb-2">24/7 Support</h5>
                <p className="text-muted small">
                  Our travel experts are available round the clock to assist
                  you.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center p-4">
                <div
                  className="icon-wrapper bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="bi bi-star fs-3 text-warning"></i>
                </div>
                <h5 className="fw-bold mb-2">Curated Experiences</h5>
                <p className="text-muted small">
                  Each package is handpicked and thoroughly vetted for quality.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center p-4">
                <div
                  className="icon-wrapper bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="bi bi-arrow-clockwise fs-3 text-info"></i>
                </div>
                <h5 className="fw-bold mb-2">Flexible Booking</h5>
                <p className="text-muted small">
                  Change your plans? No problem. Enjoy free cancellation on most
                  packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(
            135deg,
            #667eea 0%,
            #764ba2 100%
          ) !important;
        }

        .hero-section {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 100px 0;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .icon-wrapper {
          transition: transform 0.3s ease;
        }

        .icon-wrapper:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
