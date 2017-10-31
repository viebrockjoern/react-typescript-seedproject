import * as React from 'react';


const Article = ({ match }) => (
    <div>
        <h3>Article {match.params.articleId}</h3>
    </div>
)

export default Article;