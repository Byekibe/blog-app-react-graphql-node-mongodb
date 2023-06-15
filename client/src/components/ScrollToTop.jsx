import { useEffect } from "react";
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }, []);

    return (
        <div className="position relative">
            {<button
            onClick={() => window.scrollY> 200 && window.scrollTo({ top: 0, left: 0, behavior: "smooth"}) } 
                className='position-fixed bottom-0 end-0 m-3 btn-hover'
            >
                <FaArrowUp />
            </button>}
        </div>
    )
};

export default ScrollToTop;