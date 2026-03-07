import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout'
import RecipeDetails from '../pages/RecipeDetails'
import ScrollToTop from '../components/ScrollToTopOnNavigate'
import Contact from '../pages/Contact'
import Recipes from '../pages/Recipes'
import Blog from '../pages/Blog'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path={`/recipeDetails/:recipe`} element={<RecipeDetails />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/recipes'} element={<Recipes />} />
            <Route path={'/blog'} element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
