import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({
  category,
  level,
  title,
  instructor,
  image,
  weeks,
  students,
  rating
}) {
  return (
    <Link to="/course" className="card-link">
      <div className="card">
        <div className="card-image-container">
          <img src={image} alt={title} className="card-img" />

          <span className="level-badge">{level}</span>
        </div>

        <div className="card-body">
          <span className="category-label">{category}</span>

          <h3>{title}</h3>

          {/* instructor */}
          <p className="instructor-text">
            Instructor: {instructor}
          </p>

          {/* line under instructor */}
          <hr className="card-divider" />

          <div className="card-footer">
            <div className="footer-left">
              <span>🕒 {weeks} weeks</span>
              <span>👥 {students}</span>
            </div>

            <span className="rating-star">⭐ {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;