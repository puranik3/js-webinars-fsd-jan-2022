import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Alert, Col, Row } from "react-bootstrap";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Rating from "../common/Rating";
import LoadingIndicator from "../common/LoadingIndicator";

import ILibrary from "../../models/ILibrary";
import { LoadingStatus } from "../../models/utils";
import { getLibraryById } from "../../services/libraries";

const LibraryDetails = (props : RouteComponentProps<{id : string}>) =>{
    const [status, setStatus] = useState<LoadingStatus>("LOADING")
    const [library, setLibrary] = useState<ILibrary | null>(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect( ()=>{
        const fetchLibrary  = async () => {
            try{
                const data = await getLibraryById(+props.match.params.id)
                setLibrary(data)
                setStatus("LOADED")
            }
            catch (errormsg : any) {
                setError(errormsg)
                setStatus("ERROR")
            }
        }

        fetchLibrary();
    },[ props.match.params.id ]) 

    let el

    switch ( status) {
        case "LOADING":
            el = <LoadingIndicator size="large" message="Loading Libraries. Please wait...."/>;
            break;
        case "LOADED":
            const { id, name, description, opens, closes, rating, noOfRatings, imageUrl } = library as ILibrary

            el = (
                <>
                    <Row>
                        <Col xs={12} className="my-2">
                            <h1>{name}</h1>
                        </Col>
                        <Col xs={12} lg={4} className="my-2">
                            <img src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`}
                                alt={name}
                                className="w-100"
                            />
                        </Col>
                        <Col xs={12} lg={8}>
                            <div className="fs-5 my-2 ">{description}</div>
                            <Row xs={3} className="text-sm my-2">
                                <Col>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span className="ms-2">{opens} - {closes}</span>
                                </Col>
                                <Col>
                                    <Rating rating={rating} />
                                    {rating} ({noOfRatings} ratings)
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </>
            )
            break;

        case "ERROR":
            el = (
                <Alert variant="danger">
                    {error?.message}
                </Alert>
            )
            break;
    }

    return el;
}

export default LibraryDetails