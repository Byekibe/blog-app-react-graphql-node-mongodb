import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_ARTICLE } from "../mutations/articleMutation";
import { GET_ARTICLES } from "../queries/articleQueries";
import { useNavigate } from "react-router-dom";
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize'

const AddArticleForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [body, setBody] = useState('');
    const [markedBody, setMarkedBody] = useState();
    const [author, setAuthor] = useState('');

    const [addArticle] = useMutation(ADD_ARTICLE, {
        variables: { title, subtitle, body, author},
        // refetchQueries: [{ query: GET_ARTICLES, variables: { id: id }}],
        update(cache, { data: { addArticle }}) {
            const { articles } = cache.readQuery({ query: GET_ARTICLES });
            cache.writeQuery({
                query: GET_ARTICLES,
                data: { articles: [...articles, addArticle] },
              });
        },
        onCompleted: () => navigate("/")
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title==="" || subtitle==="" || body==="" || author==="") {
            return alert("Please fill out all the fields")
        }

        addArticle(title, subtitle, body, author);
        
        setTitle("")
        setAuthor("");
        setBody("");
        setSubTitle("");
    }

    return (
        <div className="container custom-margin-top">
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
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
};

export default AddArticleForm;