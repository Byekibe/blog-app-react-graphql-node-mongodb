import { GET_ARTICLE} from "../queries/articleQueries.jsx";
import { useQuery } from "@apollo/client";
import Spinner from "../components/Spinner.jsx";
import { useParams, Link } from "react-router-dom";
import SingleArticleCard from "../components/SingleArticleCard.jsx";
import Header from "../components/Header";
import { FaArrowLeft } from 'react-icons/fa'

const SingleFullArticle = () => {

    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_ARTICLE, {
        variables: { id }
    });

    if (loading) return <Spinner />;
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="custom-margin-top">
            <Header />
            <div className="container">
            <SingleArticleCard article={data.article} />
            <Link to="/" className="btn btn-outline-secondary btn-sm"><FaArrowLeft />Go Back</Link>
        </div>
        </div>
    )
};

export default SingleFullArticle;
