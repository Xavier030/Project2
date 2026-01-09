"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../../app/globals.css";

export default function Customer() {
  return (
    <div>
      <Head>
        <title>Register - World Travel</title>
        <meta
          name="description"
          content="Create your account and start planning your next adventure"
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
          <h1 className="hero-title">Join us to Explore</h1>
          <p className="hero-subtitle">
            Create your account and start planning your next adventure
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-10">
            {/* Form Card */}
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="card-body p-0">
                <div className="row g-0">
                  {/* Form Side */}
                  <div className="col-lg-12">
                    <div className="p-4 p-md-5">
                      {/* Progress Bar */}
                      <div className="mb-5">
                        <div className="progress" style={{ height: "8px" }}>
                          <div
                            className="progress-bar bg-gradient"
                            role="progressbar"
                            style={{ width: "33%" }}
                            aria-valuenow="33"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span className="text-primary fw-medium">
                            Step 1 of 3
                          </span>
                          <span className="text-muted">
                            Personal Information
                          </span>
                        </div>
                      </div>

                      <form className="needs-validation" noValidate>
                        {/* Personal Info Section */}
                        <div className="mb-5">
                          <h3 className="fw-bold mb-4 d-flex align-items-center">
                            <i className="bi bi-person-circle me-2 text-primary"></i>
                            Personal Information
                          </h3>

                          <div className="row g-3">
                            <div className="col-md-6">
                              <label
                                htmlFor="firstName"
                                className="form-label fw-medium"
                              >
                                First Name *
                              </label>
                              <div className="input-group">
                                <span className="input-group-text bg-light">
                                  <i className="bi bi-person"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstName"
                                  placeholder="Jolly"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <label
                                htmlFor="lastName"
                                className="form-label fw-medium"
                              >
                                Last Name *
                              </label>
                              <div className="input-group">
                                <span className="input-group-text bg-light">
                                  <i className="bi bi-person"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastName"
                                  placeholder="Warner"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <label className="form-label fw-medium">
                                Birthday *
                              </label>
                              <div className="row g-2">
                                <div className="col-md-4">
                                  <select className="form-select" required>
                                    <option value="">Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                  </select>
                                </div>
                                <div className="col-md-4">
                                  <select className="form-select" required>
                                    <option value="">Day</option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                      <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="col-md-4">
                                  <select className="form-select" required>
                                    <option value="">Year</option>
                                    {Array.from({ length: 100 }, (_, i) => {
                                      const year =
                                        new Date().getFullYear() - 18 - i;
                                      return (
                                        <option key={year} value={year}>
                                          {year}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <label className="form-label fw-medium">
                                Gender *
                              </label>
                              <div className="d-flex gap-4">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="female"
                                  />
                                  <label
                                    className="form-check-label d-flex align-items-center"
                                    htmlFor="female"
                                  >
                                    <i className="bi bi-gender-female me-2 text-pink"></i>
                                    Female
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value="male"
                                  />
                                  <label
                                    className="form-check-label d-flex align-items-center"
                                    htmlFor="male"
                                  >
                                    <i className="bi bi-gender-male me-2 text-primary"></i>
                                    Male
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="other"
                                    value="other"
                                  />
                                  <label
                                    className="form-check-label d-flex align-items-center"
                                    htmlFor="other"
                                  >
                                    <i className="bi bi-gender-ambiguous me-2 text-success"></i>
                                    Other
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="mb-5">
                          <h3 className="fw-bold mb-4 d-flex align-items-center">
                            <i className="bi bi-telephone me-2 text-primary"></i>
                            Contact Information
                          </h3>

                          <div className="row g-3">
                            <div className="col-12">
                              <label
                                htmlFor="phone"
                                className="form-label fw-medium"
                              >
                                Phone Number *
                              </label>
                              <div className="input-group">
                                <span className="input-group-text bg-light">
                                  <i className="bi bi-phone"></i>
                                </span>
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="phone"
                                  placeholder="123-456-7890"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <label className="form-label fw-medium">
                                Address *
                              </label>

                              <div className="mb-3">
                                <label
                                  htmlFor="street"
                                  className="form-label small text-muted"
                                >
                                  Street Address
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text bg-light">
                                    <i className="bi bi-house-door"></i>
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="street"
                                    placeholder="123 Main St"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="row g-3">
                                <div className="col-md-6">
                                  <label
                                    htmlFor="city"
                                    className="form-label small text-muted"
                                  >
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    placeholder="New York"
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="province"
                                    className="form-label small text-muted"
                                  >
                                    Province/State
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="province"
                                    placeholder="NY"
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="country"
                                    className="form-label small text-muted"
                                  >
                                    Country
                                  </label>
                                  <select
                                    className="form-select"
                                    id="country"
                                    required
                                  >
                                    <option value="">Select Country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="AU">Australia</option>
                                    <option value="JP">Japan</option>
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="postalCode"
                                    className="form-label small text-muted"
                                  >
                                    Postal Code
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="postalCode"
                                    placeholder="10001"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Account Info Section */}
                        <div className="mb-5">
                          <h3 className="fw-bold mb-4 d-flex align-items-center">
                            <i className="bi bi-shield-lock me-2 text-primary"></i>
                            Account Information
                          </h3>

                          <div className="row g-3">
                            <div className="col-12">
                              <label
                                htmlFor="email"
                                className="form-label fw-medium"
                              >
                                Email Address *
                              </label>
                              <div className="input-group">
                                <span className="input-group-text bg-light">
                                  <i className="bi bi-envelope"></i>
                                </span>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="name@example.com"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <label
                                htmlFor="userId"
                                className="form-label fw-medium"
                              >
                                User ID *
                              </label>
                              <div className="input-group">
                                <span className="input-group-text bg-light">
                                  <i className="bi bi-person-badge"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="userId"
                                  placeholder="userid"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <label
                                htmlFor="password"
                                className="form-label fw-medium"
                              >
                                Password *
                              </label>
                              <div className="input-group">
                                <span className="input-group-text bg-light">
                                  <i className="bi bi-key"></i>
                                </span>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  placeholder="••••••••"
                                  required
                                />
                                <button
                                  className="btn btn-outline-secondary"
                                  type="button"
                                  onClick={() => {
                                    const pass =
                                      document.getElementById("password");
                                    pass.type =
                                      pass.type === "password"
                                        ? "text"
                                        : "password";
                                  }}
                                >
                                  <i className="bi bi-eye"></i>
                                </button>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <label
                                htmlFor="confirmPassword"
                                className="form-label fw-medium"
                              >
                                Confirm Password *
                              </label>
                              <div className="input-group">
                                <span className="input-group-text bg-light">
                                  <i className="bi bi-key-fill"></i>
                                </span>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="confirmPassword"
                                  placeholder="••••••••"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="terms"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="terms"
                                >
                                  I agree to the{" "}
                                  <a
                                    href="#"
                                    className="text-primary text-decoration-none"
                                  >
                                    Terms of Service
                                  </a>{" "}
                                  and{" "}
                                  <a
                                    href="#"
                                    className="text-primary text-decoration-none"
                                  >
                                    Privacy Policy
                                  </a>
                                </label>
                              </div>

                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="newsletter"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="newsletter"
                                >
                                  Subscribe to our newsletter for travel deals
                                  and updates
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Form Actions */}
                        <div className="d-flex flex-column flex-md-row gap-3">
                          <button
                            type="reset"
                            className="btn btn-outline-primary px-4 py-3 flex-fill"
                          >
                            <i className="bi bi-arrow-clockwise me-2"></i>
                            Reset Form
                          </button>
                          <button
                            type="submit"
                            className="btn btn-gradient px-5 py-3 flex-fill"
                          >
                            <i className="bi bi-person-plus me-2"></i>
                            Create Account
                          </button>
                        </div>

                        <div className="text-center mt-4">
                          <p className="text-muted mb-0">
                            Already have an account?{" "}
                            <a
                              href="/login"
                              className="text-primary fw-medium text-decoration-none"
                            >
                              Sign in here
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 4rem 0;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .form-label {
          margin-bottom: 0.5rem;
        }

        .input-group-text {
          border-right: none;
          background-color: #f8f9fa !important;
          border-color: #dee2e6;
        }

        .form-control:focus + .input-group-text {
          border-color: #667eea;
        }

        .form-check-input:checked {
          background-color: #667eea;
          border-color: #667eea;
        }

        .form-check-label {
          cursor: pointer;
          user-select: none;
        }

        .text-pink {
          color: #e91e63;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
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
        }
      `}</style>
    </div>
  );
}
