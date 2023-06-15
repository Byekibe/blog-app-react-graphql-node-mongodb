import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddArticle = () => {
    return (
        <div className="position-relative">
            <Link to="/add/article">
                {/* <div className='plus-icon float-end d-flex justify-content-center align-items-center my-2 me-3 position-sticky'>
                    <FaPlus />
                </div> */}
                <div style={{ marginTop: "4rem"}} className='plus-icon d-flex position-fixed z-3 top-0 end-0 justify-content-center align-items-center me-3'>
                    <FaPlus />
                </div>
            </Link>
        </div>
    )
}

export default AddArticle;