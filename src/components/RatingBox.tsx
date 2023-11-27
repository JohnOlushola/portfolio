import { useState } from "react";

// Star SVG Icon
const Star = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M12 2.69l2.76 5.63 6.22.9-4.51 4.39 1.06 6.18L12 17.77l-5.53 2.84 1.06-6.18L3.02 9.22l6.22-.9L12 2.69z"
    />
  </svg>
);

const RatingBox = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {/* render 5 stars */}
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          aria-label={`Rate ${index} out of 5`}
          className="star-button"
          onClick={() => setRating(index)}
        >
          <Star />
        </button>
      ))}
    </div>
  );
};

export default RatingBox;
