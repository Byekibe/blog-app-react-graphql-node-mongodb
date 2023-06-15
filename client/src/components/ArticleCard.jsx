import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import DeleteArticleButton from "./DeleteArticleButton";
import MDEditor from '@uiw/react-md-editor';

const ArticleCard = ({ article }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const style = {
        height: "50px",
        overflow: "hidden",
        margin:"1em 0"
    };

    return (
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title">{article.title}</h3>
                    <h5 className="card-subtitle">{article.subtitle}</h5>
                    <div style={style}>
                    <div className="card-text">
                        <MDEditor.Markdown source={article.body} style={{ whiteSpace: 'pre-wrap' }} />
                    </div>
                    </div>
                    <div className="mb-4" style={{ height: "2px", backgroundColor: "rgba(163, 161, 161, 0.5" }}></div>
                    <div className="action-buttons">
                        <Link to={`/details/${article.id}`} className="btn btn-outline-success me-3">See More<FaArrowRight className="arrow-right" /></Link>
                        {isLoggedIn && <Link to={`/update/${article.id}`} className="btn btn-sm btn-outline-secondary me-3">Update Article</Link>}
                        {isLoggedIn && <DeleteArticleButton id={article.id} />}
                    </div>
                </div>
            </div>
    );
};

export default ArticleCard;