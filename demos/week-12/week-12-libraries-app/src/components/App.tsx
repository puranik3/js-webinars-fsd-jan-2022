import { Container } from 'react-bootstrap';
import Navigation from './globals/Navigation';
import { Route } from 'react-router-dom';

import Home from './globals/Home';
import LibraryList from './LibrariesList/LibraryList';
import LibraryDetails from './LibraryDetails/LibraryDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <>
            <Navigation />
            <Container className="my-4">
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/libraries" component={LibraryList} exact />
                <Route path="/libraries/:id" component={LibraryDetails} />
            </Container>
        </>
    );
};

export default App;