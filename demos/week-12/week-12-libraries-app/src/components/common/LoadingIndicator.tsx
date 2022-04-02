import { Spinner } from "react-bootstrap";

type Props = {
    size: "small" | "medium" | "large";
    message: string;
};

const dynamicSize = {
    small: {
        width: "1.5rem",
        height: "1.5rem",
    },
    medium: {
        width: "2.5rem",
        height: "2.5rem",
    },
    large: {
        width: "5rem",
        height: "5rem",
    },
};

const LoadingIndicator = ( { message, size } : Props ) => {
    return (
        <div className="d-flex flex-column align-items-center my-4">
            <Spinner animation="border" role="status" style={dynamicSize[size]}>
                <span className="visually-hidden">{message}</span>
            </Spinner>
            <span>{message}</span>
        </div>
    );
};

LoadingIndicator.defaultProps = {
    size: 'medium',
    message: 'Loading'
};

export default LoadingIndicator;
