import { fetchReviews } from "components/fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import PropTypes from "prop-types";

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(id)
      .then((reviews) => {
        setReviews(reviews);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!reviews) {
    return <Loader/>;
  }
  return(
    <div>
      {reviews.length !== 0 ? 
        reviews.map((review => (
          <div key={review.id}>
            <b>{review.author}</b>
            <p>{review.content}</p>
          </div>
        )))
        : <p>Out of reviews</p>}
    </div>
  );
};

Reviews.propTypes = {
  children: PropTypes.node,
};

export default Reviews;