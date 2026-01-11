"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "../../app/globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/vacation" },
    { label: "Register", href: "/customer" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container">
        {/* Logo - Left Side */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-3">
          <div className="logo-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
                fill="url(#gradient)"
              />
              <path d="M16 10l6 12-6-3-6 3 6-12z" fill="white" />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="2"
                  y1="2"
                  x2="30"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#667eea" />
                  <stop offset="1" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="d-flex flex-column">
            <span
              className={`fw-bold fs-4 ${
                scrolled ? "text-dark" : "text-white"
              }`}
            >
              World Travel
            </span>
            <span
              className={`fs-6 fw-light ${
                scrolled ? "text-muted" : "text-white/80"
              }`}
            >
              Explore Beyond Limits
            </span>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger ${isOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Links - Right Side */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <div className="navbar-nav ms-auto align-items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-item position-relative mx-2"
              >
                <span
                  className={`nav-link fw-medium px-3 py-2 rounded-pill hover-effect ${
                    scrolled ? "text-dark" : "text-white"
                  }`}
                >
                  {item.label}
                  {item.label === "Login" && (
                    <span className="login-badge"></span>
                  )}
                </span>
              </Link>
            ))}
            <Link href="/vacation" className="nav-item ms-3">
              <button className="btn btn-gradient px-4 py-2 rounded-pill fw-medium">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease-in-out;
        }

        .logo-icon {
          transition: transform 0.3s ease;
        }

        .logo-icon:hover {
          transform: rotate(15deg);
        }

        .hamburger {
          width: 30px;
          height: 24px;
          position: relative;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: ${scrolled
            ? "linear-gradient(135deg, #667eea, #764ba2)"
            : "white"};
          border-radius: 3px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: all 0.3s ease-in-out;
        }

        .hamburger span:nth-child(1) {
          top: 0px;
        }

        .hamburger span:nth-child(2) {
          top: 10px;
        }

        .hamburger span:nth-child(3) {
          top: 20px;
        }

        .hamburger.active span:nth-child(1) {
          top: 10px;
          transform: rotate(135deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .hamburger.active span:nth-child(3) {
          top: 10px;
          transform: rotate(-135deg);
        }

        .nav-link {
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .nav-link:hover {
          color: ${scrolled ? "#2d3748" : "white"} !important;
          opacity: 0.9;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.1),
            rgba(118, 75, 162, 0.1)
          );
          border-radius: 50px;
          transform: scale(0);
          transition: transform 0.3s ease;
          z-index: -1;
        }

        .nav-link:hover::before {
          transform: scale(1);
        }

        .hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-effect:hover {
          transform: translateY(-2px);
        }

        .login-badge {
          margin-left: 4px;
          font-size: 0.8em;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-gradient::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .btn-gradient:hover::before {
          left: 100%;
        }

        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 992px) {
          .navbar-collapse {
            background: ${scrolled ? "white" : "rgba(255, 255, 255, 0.95)"};
            backdrop-filter: blur(10px);
            padding: 1rem;
            border-radius: 1rem;
            margin-top: 1rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          .nav-item {
            margin: 0.5rem 0;
          }

          .nav-link {
            color: ${scrolled ? "#4a5568" : "white"} !important;
            display: block;
            text-align: center;
          }

          .btn-gradient {
            display: block;
            margin: 0.5rem auto;
            width: 100%;
            max-width: 200px;
          }
        }

        @media (max-width: 576px) {
          .navbar-brand {
            flex-direction: row;
          }

          .navbar-brand .d-flex {
            margin-left: 10px;
          }
        }
      `}</style>
    </nav>
  );
}
