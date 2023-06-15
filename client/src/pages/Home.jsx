import Header from "../components/Header";
import Articles from "../components/Articles";
import AddArticle from "../components/AddArticle";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
        <Header />
        <AddArticle />
        <div className='container custom-margin'>
            <div>
                <Articles />
            </div>
        </div>
        <ScrollToTop />
        <Footer />
        
        </>
    )
};

export default Home;