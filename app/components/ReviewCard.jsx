const ReviewCard = ({ author, date, rating, content }) => {
  return (
    <div className="review-card">
      <div className="d-flex justify-content-between mb-2">
        <span className="review-author">{author}</span>
        <span className="review-date">{date}</span>
      </div>
      <div className="star-rating">{rating}</div>
      <p>{content}</p>
    </div>
  );
};

export default ReviewCard;
