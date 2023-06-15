import MDEditor from '@uiw/react-md-editor';
import UpdateArticle from './UpdateArticle.jsx';

const SingleArticleCard = ({ article }) => {
    return (
        <>
        <div className="card mb-3 mt-2">
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <h6 className="card-subtitle">{article.subtitle}</h6>
                <div className="card-text">
                    <MDEditor.Markdown source={article.body} style={{ whiteSpace: 'pre-wrap' }} />
                </div>
                <p>Written By:<em>{article.author}</em> <span>{article.date}</span></p>
            </div>
        </div>
        <UpdateArticle />
        </>
    )
}

export default SingleArticleCard;
