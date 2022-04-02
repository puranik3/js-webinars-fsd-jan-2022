import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import './Rating.css';

type Props = {
    rating: number
};

const Rating = ( { rating } : Props ) => {
    const fullStars = Math.floor( rating );
    const halfStars = Math.round( rating ) - fullStars; // either 0 or 1
    const emptyStars = 5 - ( fullStars + halfStars );

    return (
        <span className="starColor">
            {
                Array.from( { length : fullStars } ).map(
                    ( item, idx ) => (
                        <FontAwesomeIcon icon={faStar} key={idx} />
                    )
                )
            }
            {
                halfStars ? (
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                ) : null
            }
            {
                Array.from( { length : emptyStars } ).map(
                    ( item, idx ) => (
                        <FontAwesomeIcon icon={faStarEmpty} key={idx} />
                    )
                )
            }
        </span>
    )
};

Rating.defaultProps = {
    rating: 4
};

export default Rating;