import { useState } from "react";
import TicketCard from "./TicketCard";
import ReviewCard from "./ReviewCard";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState("tickets");

  const tickets = [
    {
      id: 1,
      image: "/images/view1.avif",
      title: "Serene Forest Retreat",
      description:
        "Escape to lush green forests where towering trees create a natural canopy.",
      price: 899,
      status: "Available",
      link: "/vacation",
    },
    {
      id: 2,
      image: "/images/view.2.avif",
      title: "Majestic Mountain Getaway",
      description:
        "Experience breathtaking mountain vistas with crisp air and stunning landscapes.",
      price: 1299,
      status: "Available",
      link: "/vacation",
    },
    {
      id: 3,
      image: "/images/UK.avif",
      title: "London Eye Experience",
      description: "Enjoy panoramic views of London from above",
      price: 45,
      status: "Limited",
      link: "/vacation",
    },
  ];

  const reviews = [
    {
      id: 1,
      author: "John Doe",
      date: "January 15, 2025",
      rating: "★★★★★",
      content:
        "The Australia package was amazing! The tour guides were knowledgeable and the accommodations were top-notch. Will definitely book with World Travel again!",
    },
    {
      id: 2,
      author: "Jane Smith",
      date: "February 3, 2025",
      rating: "★★★★☆",
      content:
        "Great experience in China! The only downside was the weather during our visit, but that's no fault of the travel agency. Overall very satisfied.",
    },
    {
      id: 3,
      author: "Michael Brown",
      date: "January 28, 2025",
      rating: "★★★★★",
      content:
        "London package exceeded expectations. The hotel location was perfect and the guided tours were very informative. Highly recommend!",
    },
    {
      id: 4,
      author: "Sarah Johnson",
      date: "December 20, 2024",
      rating: "★★★★☆",
      content:
        "Enjoyed the South Africa safari package. The wildlife viewing was incredible. Only suggestion is to provide more detailed packing lists.",
    },
  ];

  return (
    <div className="container my-5">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "tickets" ? "active" : ""}`}
          onClick={() => setActiveTab("tickets")}
        >
          Featured Tickets
        </button>
        <button
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Customer Reviews
        </button>
      </div>

      <div
        id="tickets"
        className={`tab-content ${activeTab === "tickets" ? "active" : ""}`}
      >
        <div className="row mt-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="col-md-4">
              <TicketCard {...ticket} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/vacation" className="view-more">
            View All Packages →
          </a>
        </div>
      </div>

      <div
        id="reviews"
        className={`tab-content ${activeTab === "reviews" ? "active" : ""}`}
      >
        <div className="row mt-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-md-6">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/contact" className="view-more">
            Write a Review →
          </a>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
