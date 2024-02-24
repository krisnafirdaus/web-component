import React, { useState } from 'react';
import './styles.css'; 
import { RatingWidgetProps, RatingWidgetState } from "./types";


const RatingWidget: React.FC<RatingWidgetProps> = ({ maxRating }) => {
  const [rating, setRating] = useState<RatingWidgetState>({ rating: 0 });

  return (
    <div className="rating-widget">
      {[...Array(maxRating)].map((star, index) => {
        index += 1;
				console.log(star)
        return (
          <button
            key={index}
            className={index <= rating.rating ? "star selected" : "star"}
            onClick={() => setRating({ rating: index })}
          >
            &#9733; {/* Star symbol */}
          </button>
        );
      })}
    </div>
  );
};

export default RatingWidget;
