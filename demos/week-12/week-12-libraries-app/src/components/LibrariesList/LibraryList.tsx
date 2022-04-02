import { Component } from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import { LoadingStatus } from '../../models/utils';
import ILibrary from '../../models/ILibrary';
import { getLibraries } from '../../services/libraries';
import LoadingIndicator from '../common/LoadingIndicator';
import LibraryListItem from './LibraryListItem';

type Props = {};

type State = {
    status: LoadingStatus,
    libraries?: ILibrary[],
    error?: Error
}

class LibraryList extends Component<Props, State> {
    state : State = {
        status: 'LOADING'
    };

    render() {
        let el;

        const { status, libraries, error } = this.state;

        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator size="large" message="Fetching libraries" />
                );
                break;
            case 'ERROR':
                el = (
                    <Alert variant="danger">
                        {error?.message}
                    </Alert>
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={1} md={2} lg={3}>
                        {
                            libraries?.map(
                                library => (
                                    <Col key={library.id} className="d-flex align-items-stretch my-3">
                                        <LibraryListItem library={library} />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                );

                break;
            default:
                break;
        }

        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const libraries = await getLibraries();
            this.setState({
                status: 'LOADED',
                libraries
            });
        } catch( error ) {
            this.setState({
                status: 'ERROR',
                error: error as Error
            });
        }
    }
}

export default LibraryList;