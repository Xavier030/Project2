"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../../app/globals.css";

export default function Vacation() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPrice, setFilteredPrice] = useState([0, 2000]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 从 API 获取数据
  useEffect(() => {
    async function fetchPackages() {
      try {
        setLoading(true);
        console.log("Fetching from:", window.location.origin + "/api/packages");

        const response = await fetch("/api/packages");
        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API response:", result);

        // transfer database
        const formattedPackages = result.data.map((pkg, index) => {
          const images = [
            "/images/view1.avif",
            "/images/view2.avif",
            "/images/view3.avif",
            "/images/view4.avif",
            "/images/view5.avif",
            "/images/view6.avif",
          ];

          return {
            id: pkg.PackageId || index + 1,
            image: images[index % images.length] || "/images/default.jpg",
            title: pkg.PkgName || "Unnamed Package",
            description: pkg.PkgDesc || "No description available",
            price: parseFloat(pkg.PkgBasePrice) || 0,
            duration: `${
              pkg.PkgEndDate && pkg.PkgStartDate
                ? calculateDuration(pkg.PkgStartDate, pkg.PkgEndDate)
                : "Flexible"
            }`,
            category: mapCategory(pkg.PkgName || ""),
            rating: 4.5 + Math.random() * 0.5,
            features: [
              pkg.PkgDesc ? `${pkg.PkgDesc.split(".")[0]}` : "Accommodation",
              "Daily Meals Included",
              "Guided Tours",
              pkg.PkgEndDate
                ? `Valid until ${formatDate(pkg.PkgEndDate)}`
                : "Flexible Dates",
            ],
            tag: getPackageTag(
              pkg.PkgName || "",
              parseFloat(pkg.PkgBasePrice) || 0
            ),
            discount: calculateDiscount(
              pkg.PkgStartDate,
              pkg.PkgEndDate,
              parseFloat(pkg.PkgBasePrice) || 0
            ),
            dbData: pkg,
          };
        });

        setPackages(formattedPackages);
        setError(null);
      } catch (err) {
        console.error("Detailed error:", err);
        setError(`Error: ${err.message}`);
        setPackages(getDefaultPackages());
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);

  //
  function calculateDuration(startDate, endDate) {
    if (!startDate || !endDate) return "Flexible";

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 Day";
    if (diffDays === 2) return "2 Days 1 Night";
    if (diffDays === 3) return "3 Days 2 Nights";
    if (diffDays === 4) return "4 Days 3 Nights";
    if (diffDays === 5) return "5 Days 4 Nights";
    if (diffDays === 6) return "6 Days 5 Nights";
    return `${diffDays} Days`;
  }

  // 辅助函数：映射类别
  function mapCategory(pkgName) {
    const name = pkgName.toLowerCase();
    if (
      name.includes("beach") ||
      name.includes("coastal") ||
      name.includes("ocean")
    )
      return "beach";
    if (
      name.includes("mountain") ||
      name.includes("hiking") ||
      name.includes("adventure")
    )
      return "adventure";
    if (
      name.includes("city") ||
      name.includes("urban") ||
      name.includes("cultural")
    )
      return "city";
    if (
      name.includes("forest") ||
      name.includes("nature") ||
      name.includes("wildlife")
    )
      return "nature";
    if (
      name.includes("luxury") ||
      name.includes("premium") ||
      name.includes("exclusive")
    )
      return "luxury";
    if (name.includes("desert") || name.includes("safari")) return "adventure";
    return "nature"; // 默认类别
  }

  // 辅助函数：获取标签
  function getPackageTag(pkgName, price) {
    if (price > 1500) return "LUXURY";
    if (price < 800) return "BUDGET";

    const name = pkgName.toLowerCase();
    if (name.includes("new") || name.includes("latest")) return "NEW";
    if (name.includes("popular") || name.includes("bestseller"))
      return "POPULAR";
    if (name.includes("adventure") || name.includes("extreme"))
      return "ADVENTURE";

    return "FEATURED";
  }

  // 辅助函数：计算折扣
  function calculateDiscount(startDate, endDate, price) {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const now = new Date();
    const timeUntilStart = start - now;
    const daysUntilStart = timeUntilStart / (1000 * 60 * 60 * 24);

    // 如果行程即将开始（30天内），提供折扣
    if (daysUntilStart > 0 && daysUntilStart < 30) {
      return Math.min(25, Math.floor(daysUntilStart / 2));
    }

    // 高价包提供标准折扣
    if (price > 1000) return 15;
    if (price > 500) return 10;

    return 0;
  }

  // 辅助函数：格式化日期
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  function getDefaultPackages() {
    return [
      {
        id: 1,
        image: "/images/view4.avif",
        title: "Serene Forest Retreat",
        description:
          "Escape to lush green forests where towering trees create a natural canopy.",
        price: 899,
        duration: "3 Days 2 Nights",
        category: "nature",
        rating: 4.8,
        features: [
          "3 Nights Accommodation",
          "Guided Nature Walks",
          "Daily Breakfast",
          "Spa Access",
        ],
        tag: "BEST SELLER",
        discount: 15,
      },
      {
        id: 2,
        image: "/images/view1.avif",
        title: "Majestic Mountain Getaway",
        description:
          "Experience breathtaking mountain vistas with crisp air and stunning landscapes. Perfect for adventure seekers.",
        price: 1299,
        duration: "4 Days 3 Nights",
        category: "adventure",
        rating: 4.9,
        features: [
          "4 Nights Accommodation",
          "Hiking & Mountaineering",
          "All Meals Included",
          "Ski Equipment Rental",
        ],
        tag: "POPULAR",
        discount: 10,
      },
      {
        id: 3,
        image: "/images/view3.avif",
        title: "Beach Paradise Escape",
        description:
          "Relax on pristine sandy beaches with turquoise waters. The ideal destination for beach lovers and water sports enthusiasts.",
        price: 1499,
        duration: "5 Days 4 Nights",
        category: "beach",
        rating: 4.7,
        features: [
          "5 Nights Accommodation",
          "Water Sports Activities",
          "Beachside Dining",
          "Sunset Cruise",
        ],
        tag: "LUXURY",
        discount: 20,
      },
      {
        id: 4,
        image: "/images/view2.avif",
        title: "Cultural City Tour",
        description:
          "Immerse yourself in rich cultural heritage, historical landmarks, and vibrant city life. Perfect for urban explorers.",
        price: 749,
        duration: "4 Days 3 Nights",
        category: "city",
        rating: 4.6,
        features: [
          "City Tour Guide",
          "Museum Entries",
          "Local Cuisine Tasting",
          "Transportation Included",
        ],
        tag: "NEW",
        discount: 0,
      },
      {
        id: 5,
        image: "/images/view5.avif",
        title: "Desert Safari Adventure",
        description:
          "Experience the magic of golden deserts with thrilling dune bashing, camel rides, and traditional Bedouin experiences.",
        price: 999,
        duration: "3 Days 2 Nights",
        category: "adventure",
        rating: 4.5,
        features: [
          "Desert Camp Stay",
          "Camel Safari",
          "Traditional Dinner",
          "Stargazing Session",
        ],
        tag: "ADVENTURE",
        discount: 12,
      },
      {
        id: 6,
        image: "/images/view6.avif",
        title: "Romantic Island Retreat",
        description:
          "Perfect honeymoon or romantic getaway with private beaches, candlelit dinners, and luxury spa treatments.",
        price: 1899,
        duration: "6 Days 5 Nights",
        category: "luxury",
        rating: 4.9,
        features: [
          "Private Villa",
          "Couple Spa Package",
          "Romantic Dinner Setup",
          "Island Hopping Tour",
        ],
        tag: "ROMANTIC",
        discount: 25,
      },
    ];
  }

  const categories = [
    { id: "all", name: "All Packages", icon: "🌍", count: packages.length },
    {
      id: "nature",
      name: "Nature",
      icon: "🌳",
      count: packages.filter((p) => p.category === "nature").length,
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: "⛰️",
      count: packages.filter((p) => p.category === "adventure").length,
    },
    {
      id: "beach",
      name: "Beach",
      icon: "🏖️",
      count: packages.filter((p) => p.category === "beach").length,
    },
    {
      id: "city",
      name: "City",
      icon: "🏙️",
      count: packages.filter((p) => p.category === "city").length,
    },
    {
      id: "luxury",
      name: "Luxury",
      icon: "✨",
      count: packages.filter((p) => p.category === "luxury").length,
    },
  ];

  const filteredPackages = packages.filter((pkg) => {
    if (selectedCategory !== "all" && pkg.category !== selectedCategory) {
      return false;
    }
    if (pkg.price < filteredPrice[0] || pkg.price > filteredPrice[1]) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <Head>
        <title>Vacation Packages - World Travel</title>
        <meta
          name="description"
          content="Explore our exclusive vacation packages from database"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="vacation-hero position-relative overflow-hidden">
        <div className="container">
          <div className="row min-vh-70 align-items-center">
            <div className="col-lg-8 col-xl-7 text-white">
              <div className="mb-4">
                <span className="badge bg-white/20 backdrop-blur-sm px-4 py-2 rounded-pill mb-3">
                  {loading
                    ? "🔄 Loading..."
                    : `✨ ${packages.length} Exclusive Packages`}
                </span>
                <h1 className="display-4 fw-bold mb-4">
                  {loading
                    ? "Loading Packages..."
                    : "Unforgettable Vacation Packages"}
                </h1>
                <p className="lead mb-4 opacity-90">
                  {loading
                    ? "Fetching the latest travel deals..."
                    : "Discover handpicked destinations and curated experiences from our database."}
                </p>
                {!loading && (
                  <div className="d-flex gap-3 flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill text-warning"></i>
                      <span>Premium Quality Packages</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-database-check text-success"></i>
                      <span>Live Database Updates</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-shield-check text-info"></i>
                      <span>Secure Booking</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-5 bg-light">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading packages from database...</p>
            </div>
          ) : error ? (
            <div className="alert alert-warning text-center">
              <i className="bi bi-exclamation-triangle me-2"></i>
              {error}
            </div>
          ) : (
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">
                      <i className="bi bi-filter me-2"></i>
                      Filter Packages
                    </h5>

                    {/* Categories */}
                    <div className="mb-4">
                      <h6 className="fw-semibold mb-3">Categories</h6>
                      <div className="d-flex flex-column gap-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            className={`btn btn-sm text-start d-flex justify-content-between align-items-center ${
                              selectedCategory === category.id
                                ? "btn-primary"
                                : "btn-outline-secondary"
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            <span>
                              {category.icon} {category.name}
                            </span>
                            <span className="badge bg-secondary bg-opacity-25">
                              {category.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-4">
                      <h6 className="fw-semibold mb-3">
                        Price Range: ${filteredPrice[0]} - ${filteredPrice[1]}
                      </h6>
                      <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="2000"
                        step="100"
                        value={filteredPrice[0]}
                        onChange={(e) =>
                          setFilteredPrice([
                            parseInt(e.target.value),
                            filteredPrice[1],
                          ])
                        }
                      />
                      <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="2000"
                        step="100"
                        value={filteredPrice[1]}
                        onChange={(e) =>
                          setFilteredPrice([
                            filteredPrice[0],
                            parseInt(e.target.value),
                          ])
                        }
                      />
                      <div className="small text-muted mt-2">
                        Max price in database: $
                        {Math.max(...packages.map((p) => p.price || 0))}
                      </div>
                    </div>

                    {/* Database Info */}
                    <div className="bg-info bg-opacity-10 p-3 rounded">
                      <h6 className="fw-semibold mb-2">
                        <i className="bi bi-database me-2"></i>
                        Database Info
                      </h6>
                      <div className="small">
                        <div>Total Packages: {packages.length}</div>
                        <div>
                          Average Price: $
                          {Math.round(
                            packages.reduce(
                              (sum, p) => sum + (p.price || 0),
                              0
                            ) / packages.length
                          ) || 0}
                        </div>
                        <div>
                          Categories:{" "}
                          {new Set(packages.map((p) => p.category)).size}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Packages Grid */}
              <div className="col-lg-9">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h3 className="fw-bold mb-1">Database Packages</h3>
                    <p className="text-muted mb-0">
                      {filteredPackages.length} packages found from{" "}
                      {packages.length} total
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => window.location.reload()}
                    >
                      <i className="bi bi-arrow-clockwise me-2"></i>
                      Refresh Data
                    </button>
                  </div>
                </div>

                {/* Packages Grid */}
                {filteredPackages.length > 0 ? (
                  <div className="row g-4">
                    {filteredPackages.map((pkg) => (
                      <div key={pkg.id} className="col-lg-6">
                        <div className="card package-card border-0 shadow-sm h-100 hover-lift">
                          {/* Image with Tags */}
                          <div
                            className="position-relative overflow-hidden"
                            style={{ height: "250px" }}
                          >
                            <div
                              className="h-100 w-100"
                              style={{
                                backgroundImage: `url(${pkg.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />

                            {/* Tags */}
                            <div className="position-absolute top-0 start-0 p-3">
                              {pkg.tag && (
                                <span className="badge bg-white text-dark fw-medium px-3 py-2">
                                  {pkg.tag}
                                </span>
                              )}
                            </div>

                            {/* Discount Badge */}
                            {pkg.discount > 0 && (
                              <div className="position-absolute top-0 end-0 p-3">
                                <span className="badge bg-danger px-3 py-2">
                                  Save {pkg.discount}%
                                </span>
                              </div>
                            )}

                            {/* Rating */}
                            <div className="position-absolute bottom-0 start-0 p-3">
                              <span className="badge bg-dark bg-opacity-75 text-white px-3 py-2">
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                {pkg.rating?.toFixed(1) || "4.5"}
                              </span>
                            </div>
                          </div>

                          {/* Card Body */}
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h5 className="card-title fw-bold mb-0">
                                {pkg.title}
                              </h5>
                              <span className="badge bg-primary bg-opacity-10 text-primary">
                                {pkg.duration}
                              </span>
                            </div>

                            <p className="card-text text-muted mb-3">
                              {pkg.description}
                            </p>

                            {/* Database Info */}
                            {pkg.dbData && (
                              <div className="mb-2 small text-info">
                                <i className="bi bi-database me-1"></i>
                                Database ID: {pkg.dbData.PackageId}
                              </div>
                            )}

                            {/* Features */}
                            <div className="mb-3">
                              {pkg.features
                                .slice(0, 3)
                                .map((feature, index) => (
                                  <div
                                    key={index}
                                    className="d-flex align-items-center mb-2"
                                  >
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <span className="small">{feature}</span>
                                  </div>
                                ))}
                            </div>

                            {/* Price & Button */}
                            <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                              <div>
                                <div className="d-flex align-items-baseline">
                                  {pkg.discount > 0 ? (
                                    <>
                                      <h4 className="fw-bold text-primary mb-0">
                                        $
                                        {Math.round(
                                          pkg.price * (1 - pkg.discount / 100)
                                        )}
                                      </h4>
                                      <del className="text-muted ms-2">
                                        ${pkg.price}
                                      </del>
                                    </>
                                  ) : (
                                    <h4 className="fw-bold text-primary mb-0">
                                      ${pkg.price}
                                    </h4>
                                  )}
                                  <small className="text-muted ms-1">
                                    /person
                                  </small>
                                </div>
                              </div>
                              <button className="btn btn-gradient px-4">
                                <i className="bi bi-arrow-right me-2"></i>
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <i className="bi bi-search display-1 text-muted mb-3"></i>
                    <h4 className="fw-bold mb-2">No packages found</h4>
                    <p className="text-muted">
                      Try adjusting your filters to find what you're looking for
                    </p>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        setSelectedCategory("all");
                        setFilteredPrice([0, 2000]);
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 bg-gradient text-white"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Need Help Choosing?</h2>
              <p className="opacity-90 mb-4">
                Our travel experts are here to help you find the perfect
                vacation package. Get personalized recommendations based on your
                preferences.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="/contact" className="btn btn-light btn-lg px-5">
                <i className="bi bi-chat-dots me-2"></i>
                Contact Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        /* 样式保持不变 */
        .vacation-hero {
          min-height: 70vh;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
            url("/images/view1.avif");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 100px 0 50px;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.3),
            rgba(118, 75, 162, 0.3)
          );
          z-index: 0;
        }

        .vacation-hero .container {
          position: relative;
          z-index: 1;
        }

        .min-vh-70 {
          min-height: 70vh;
        }

        .package-card {
          transition: all 0.3s ease;
          border-radius: 16px;
          overflow: hidden;
        }

        .package-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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

        .icon-wrapper {
          transition: transform 0.3s ease;
        }

        .icon-wrapper:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .vacation-hero {
            min-height: 50vh;
            padding: 80px 0 30px;
          }

          .vacation-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
