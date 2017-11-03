import * as React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import Article from './Article';

const News = ({ match }) => (
    <div>
        <h2>Nachrichten-Artikel</h2>
        <nav>
            <Link to={`${match.url}/eine-nachricht`}>
                Aktuellste Nachricht
            </Link>
            <Link to={`${match.url}/eine-zweite-nachricht`}>
                Zweite Nachricht
            </Link>
            <Link to={`${match.url}/dritte-nachricht`}>
                3. Nachricht
            </Link>
        </nav>

        <Route path={`${match.url}/:articleId`} component={Article}/>
        <Route
            exact={true}
            path={match.url}
        />
    </div>
)

export default News;