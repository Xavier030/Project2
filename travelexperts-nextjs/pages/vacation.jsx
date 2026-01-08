import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Vacation() {
  const packages = [
    {
      id: 1,
      image: "/images/view4.avif",
      title: "Serene Forest Retreat",
      description:
        "Escape to lush green forests where towering trees create a natural canopy. Ideal for nature lovers seeking tranquility.",
      price: 899,
      features: [
        "3 Nights Accommodation",
        "Guided Nature Walks",
        "Daily Breakfast",
        "Spa Access",
      ],
    },
    {
      id: 2,
      image: "/images/view1.avif",
      title: "Majestic Mountain Getaway",
      description:
        "Experience breathtaking mountain vistas with crisp air and stunning landscapes. Perfect for adventure seekers.",
      price: 1299,
      features: [
        "4 Nights Accommodation",
        "Hiking & Mountaineering",
        "All Meals Included",
        "Ski Equipment Rental",
      ],
    },
    {
      id: 3,
      image: "/images/view3.avif",
      title: "Beach Paradise Escape",
      description:
        "Relax on pristine sandy beaches with turquoise waters. The ideal destination for beach lovers and water sports enthusiasts.",
      price: 1499,
      features: [
        "5 Nights Accommodation",
        "Water Sports Activities",
        "Beachside Dining",
        "Sunset Cruise",
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Vacation Package - World Travel</title>
        <meta
          name="description"
          content="Explore our exclusive vacation packages"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="container-home bgimg1">
        <div className="row justify-content-center w-100">
          <div className="col-md-10">
            <h1 className="top-heading">Unforgettable Vacation Packages</h1>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="container" id="packages">
        <div className="heading">
          <h3>Find Your Perfect Vacation</h3>
          <p>
            Choose from our selection of meticulously designed vacation packages
            tailored to every travel style
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="col">
              <div className="card h-100">
                <img src={pkg.image} className="card-img-top" alt={pkg.title} />
                <div className="card-body">
                  <h5 className="card-title">{pkg.title}</h5>
                  <p className="card-text">{pkg.description}</p>
                  <ul className="list-unstyled mt-3 text-muted small">
                    {pkg.features.map((feature, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">
                    ${pkg.price}
                    <small className="text-muted">/person</small>
                  </span>
                  <button className="btn btn-primary">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
