import { GET_ARTICLE} from "../queries/articleQueries";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { useParams, Link } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_ARTICLE, {
        variables: { id }
    });


    return (
        <div className="container">
            <SingleArticleCard article={data.article} />
            <Link to="/" className="btn btn-primary btn-sm">Go Back</Link>
        </div>
    )
};

export default SingleArticle;
