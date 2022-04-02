import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../common/Rating';

import ILibrary from '../../models/ILibrary';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

type Props = {
    library: ILibrary
};

const LibraryListItem = ( { library } : Props ) => {
    const { id, name, location, rating, noOfRatings, imageUrl } = library;

    return (
        <Card>
            <Card.Img variant="top" src={`${baseUrl}${imageUrl}`} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <div className="text-xs">
                        {name}
                        <div>
                            <Rating rating={rating} />
                            {rating} ({noOfRatings} rated)
                        </div>
                    </div>
                    <div>
                        <Link to={`/libraries/${id}`} className="btn btn-primary btn-sm">
                            More
                        </Link>
                    </div>
                </Card.Title>
                <Card.Text>
                    <span>
                        <strong>Address</strong>: {location}
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default LibraryListItem;
