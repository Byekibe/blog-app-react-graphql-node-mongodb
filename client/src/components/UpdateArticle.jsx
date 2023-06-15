import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GET_ARTICLE } from "../queries/articleQueries";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_ARTICLE } from "../mutations/articleMutation";
import { useNavigate } from "react-router-dom";
import { BsArrow90DegLeft } from 'react-icons/bs';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import Spinner from "./Spinner";


const UpdateArticle = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const { loading, error, data } = useQuery(GET_ARTICLE, {
        variables: { id }
    });

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>
    

    const [title, setTitle] = useState(data?.article.title);
    const [subtitle, setSubTitle] = useState(data?.article.subtitle);
    const [body, setBody] = useState(data?.article.body);
    const [author, setAuthor] = useState(data?.article.author);

    const [updateArticle] = useMutation(UPDATE_ARTICLE, {
        variables: { id: id, title, subtitle, body, author },
        refetchQueries: [{ query: GET_ARTICLE, variables: { id: id }}],
        onCompleted: () => navigate("/")
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title==="" || subtitle==="" || body==="" || author==="") {
            return alert("Please fill out all the fields")
        }
        
        updateArticle(title, subtitle, body, author);
    }


    return (
        <div className="container custom-margin-top">
        <Link className=" btn btn-sm btn-outline-secondary" to="/"><BsArrow90DegLeft />Go Back</Link>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="subtitle" className="form-label">Subtitle</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="subtitle" 
                    value={subtitle}
                    onChange={e => setSubTitle(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="author" 
                    value={author}
                    onChange={e => setAuthor(e.target.value)}

                />
            </div>
            <div className="form-floating mb-3">
                {/* <textarea 
                    className="form-control"  
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    id="body" 
                    placeholder="Leave a comment here"
                    style={{ minHeight: "200px" }}
                >

                </textarea>
                <label htmlFor="floatingTextarea2">Body</label> */}
                <MDEditor
                    value={body}
                    onChange={setBody}
                    previewOptions={{
                        rehypePlugins: [[rehypeSanitize]],
                      }}
                />
            </div>
            <button type="submit" className="btn btn-sm btn-outline-secondary">Submit</button>
        </form>
        
        </div>
    )
};

export default UpdateArticle;