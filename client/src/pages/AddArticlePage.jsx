import { Link } from 'react-router-dom';
import AddArticleForm from '../components/AddArticleForm.jsx';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../components/Header.jsx';

const addArticlePage = () => {

    return (
        <>
            <Header />
            <AddArticleForm />
            <div className="container">
                <Link className='btn btn-sm btn-outline-secondary mt-5' to="/"><FaArrowLeft />Go Back</Link>
            </div>
        </>
    )
};

export default addArticlePage;
