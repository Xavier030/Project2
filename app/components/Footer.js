"use client";

import Link from "next/link";
import "../../app/globals.css";

export default function Footer() {
  const footerSections = {
    quickLinks: [
      { name: "Home", href: "/", icon: "🏠" },
      { name: "Packages", href: "/vacation", icon: "✈️" },
      { name: "Register", href: "/customer", icon: "📝" },
      { name: "Contact", href: "/contact", icon: "📞" },
      { name: "Login", href: "/login", icon: "🔐" },
    ],
    services: [
      { name: "Vacation Packages", icon: "🌴" },
      { name: "Flight Booking", icon: "✈️" },
      { name: "Hotel Reservations", icon: "🏨" },
      { name: "Car Rental", icon: "🚗" },
      { name: "Travel Insurance", icon: "🛡️" },
    ],
    contact: {
      address: "98 West 21th Street, Suite 721, New York, NY 10016",
      phone: "+1 (435) 3533",
      email: "info@worldtravel.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-8">
      <div className="container">
        <div className="row g-5">
          {/* Logo and Description - Left Side */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-5">
              <Link
                href="/"
                className="d-flex align-items-center gap-3 mb-4 text-decoration-none"
              >
                <div className="footer-logo">
                  <div className="logo-circle">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2Z"
                        fill="url(#footerGradient)"
                      />
                      <path d="M20 12L28 24L20 20L12 24L20 12Z" fill="white" />
                      <defs>
                        <linearGradient
                          id="footerGradient"
                          x1="2"
                          y1="2"
                          x2="38"
                          y2="38"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#667eea" />
                          <stop offset="1" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="fw-bold mb-1">World Travel</h3>
                  <p className="text-light opacity-75 mb-0">
                    Explore Beyond Limits
                  </p>
                </div>
              </Link>
              <p className="text-light opacity-75 mb-4">
                Creating unforgettable travel experiences since 2026. We
                specialize in curating personalized vacation packages that
                create lifelong memories.
              </p>
            </div>
          </div>

          {/* Quick Links - Middle */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="text-primary">⚡</span> Quick Links
            </h5>
            <ul className="list-unstyled">
              {footerSections.quickLinks.map((link) => (
                <li key={link.name} className="mb-3">
                  <Link
                    href={link.href}
                    className="text-light opacity-75 text-decoration-none d-flex align-items-center gap-2 footer-link"
                  >
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter - Right Side */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-info mb-5">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <span className="text-primary">📍</span> Contact Info
              </h5>
              <div className="mb-3 d-flex align-items-start gap-3">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt fs-5"></i>
                </div>
                <div>
                  <p className="text-light opacity-75 mb-0">
                    {footerSections.contact.address}
                  </p>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center gap-3">
                <div className="contact-icon">
                  <i className="bi bi-telephone fs-5"></i>
                </div>
                <div>
                  <p className="text-light opacity-75 mb-0">
                    {footerSections.contact.phone}
                  </p>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center gap-3">
                <div className="contact-icon">
                  <i className="bi bi-envelope fs-5"></i>
                </div>
                <div>
                  <p className="text-light opacity-75 mb-0">
                    {footerSections.contact.email}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="contact-icon">
                  <i className="bi bi-clock fs-5"></i>
                </div>
                <div>
                  <p className="text-light opacity-75 mb-0">
                    {footerSections.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 border-gray-700" />

        {/* Bottom Bar */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-light opacity-50 mb-0">
              © {new Date().getFullYear()} World Travel. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <a
                href="#"
                className="text-light opacity-50 text-decoration-none footer-bottom-link"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-light opacity-50 text-decoration-none footer-bottom-link"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-light opacity-50 text-decoration-none footer-bottom-link"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-to-b {
          background: linear-gradient(to bottom, #1a202c, #000000);
        }

        .footer-logo .logo-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          transition: transform 0.3s ease;
        }

        .footer-logo:hover .logo-circle {
          transform: scale(1.1) rotate(10deg);
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(102, 126, 234, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          flex-shrink: 0;
        }

        .footer-link {
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .footer-link:hover {
          color: white !important;
          opacity: 1 !important;
          transform: translateX(5px);
        }

        .link-icon {
          transition: transform 0.3s ease;
        }

        .footer-link:hover .link-icon {
          transform: scale(1.2);
        }

        .link-text {
          position: relative;
        }

        .footer-link:hover .link-text::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .footer-bottom-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: white !important;
          opacity: 1 !important;
        }

        .footer-bottom-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: white;
          transition: width 0.3s ease;
        }

        .footer-bottom-link:hover::after {
          width: 100%;
        }

        .service-icon {
          transition: transform 0.3s ease;
        }

        .service-text {
          transition: color 0.3s ease;
        }

        li:hover .service-icon {
          transform: scale(1.2) rotate(10deg);
        }

        li:hover .service-text {
          color: white !important;
        }

        .bg-gray-800 {
          background-color: #2d3748;
        }

        .border-gray-700 {
          border-color: #4a5568;
        }
      `}</style>
    </footer>
  );
}
