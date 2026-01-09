import Link from "next/link";

const TicketCard = ({ image, title, description, price, status, link }) => {
  return (
    <div className="ticket-card">
      <img src={image} alt={title} className="destination-img w-100 mb-3" />
      <h4 className="ticket-title">{title}</h4>
      <p className="text-muted">{description}</p>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="ticket-price">${price}</span>
        <span
          className={`badge ${
            status === "Available" ? "bg-success" : "bg-warning text-dark"
          }`}
        >
          {status}
        </span>
      </div>
      <Link href={link} className="btn btn-outline-primary btn-sm">
        View Details
      </Link>
    </div>
  );
};

export default TicketCard;
