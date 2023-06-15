import { useMutation } from "@apollo/client";
import { BsTrash } from "react-icons/bs";
import { DELETE_ARTICLE } from "../mutations/articleMutation";
import { GET_ARTICLES } from "../queries/articleQueries";

const DeleteArticleButton = ({ id }) => {
    const [deleteArticle] = useMutation(DELETE_ARTICLE, {
        variables: { id: id},
        refetchQueries: [{ query: GET_ARTICLES }],
    });

    return (
        <>
            <button onClick={deleteArticle} className="btn btn-sm btn-outline-danger">< BsTrash />Delete Article</button>
        </>
    )
};

export default DeleteArticleButton;