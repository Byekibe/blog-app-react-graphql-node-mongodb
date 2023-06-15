import Home from './pages/Home';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import SingleArticle from './components/SingleArticle';
import NotFound from './components/NotFound';
import AddArticlePage from './pages/AddArticlePage';
import SingleFullArticle from './pages/SingleFullArticle.jsx';
import UpdateArticle from './components/UpdateArticle.jsx';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={ <SingleArticle />} />
          <Route path="/add/article" element={ <AddArticlePage />} />
          <Route path='/details/:id' element={<SingleFullArticle />} />
          <Route path="/update/:id" element={<UpdateArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App;
