import { gql, useQuery } from '@apollo/client';
import ArticleCard from './ArticleCard.jsx';
import { GET_ARTICLES } from '../queries/articleQueries.jsx';
import Spinner from './Spinner.jsx';

const Articles = () => {
    const { loading, error, data } = useQuery(GET_ARTICLES);

    if (loading) return <Spinner />;
    if (error) return <p>Something went wrong</p>
    return (
        <div className='row'>
            {
                !loading && !error && (
                    data.articles.map(article => (
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6' key={crypto.randomUUID()}>
                            <ArticleCard article={article} />
                        </div>
                    ))
                )
            }
        </div>
    )
};

export default Articles;