"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../../app/globals.css";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login - World Travel</title>
        <meta name="description" content="Login to your World Travel account" />
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
          <h1 className="hero-title">Login to view</h1>
          <p className="hero-subtitle">
            Log in your account and start planning your next adventure
          </p>
        </div>
      </section>

      {/* Login Form */}
      <main>
        <section className="login-section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="card border-0 shadow-lg">
                  <div className="card-body p-5">
                    <h2 className="text-center mb-4">Login Details</h2>
                    <form>
                      <div className="mb-4">
                        <label htmlFor="username" className="form-label">
                          Username or Email
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="bi bi-person"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            placeholder="Enter your username or email"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="bi bi-lock"></i>
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => {
                              const pass = document.getElementById("password");
                              pass.type =
                                pass.type === "password" ? "text" : "password";
                            }}
                          >
                            <i className="bi bi-eye"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mb-4 form-check d-flex justify-content-between">
                        <div>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="remember"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="#"
                          className="text-primary text-decoration-none"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-gradient w-100 py-3 mb-3"
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Login
                      </button>
                      <div className="text-center">
                        <p className="text-muted mb-0">
                          Don't have an account?{" "}
                          <a
                            href="/customer"
                            className="text-primary fw-medium text-decoration-none"
                          >
                            Sign up here
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
