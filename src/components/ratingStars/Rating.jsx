import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ value }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <FontAwesomeIcon
          key={i}
          icon={
            value >= i
              ? faStar
              : value >= i - 0.5
              ? faStarHalfStroke
              : faStarRegular
          }
          style={{ color: "#ffc107" }}
        />
      ))}
    </>
  );
}

export default Rating;
