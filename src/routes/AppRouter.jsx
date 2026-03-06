import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout'
import RecipeDetails from '../pages/RecipeDetails'
import ScrollToTop from '../components/ScrollToTopOnNavigate'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path={`/recipeDetails/:recipe`} element={<RecipeDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
