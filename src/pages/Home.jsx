import React from 'react'
import Carousal from '../components/Carousal'
import RecipeCard from '../components/RecipeCard'
import { categories, posts } from '../components/Assets'
import { recipes } from '../components/Assets'
import adsImage from '../assets/ads.webp'
import maleChefImage from '../assets/maleChefImage.webp'
import { LearnMoreButton, ShareButton, SubscribeButton } from '../components/ButtonUi'
import { Link } from 'react-router-dom'
import saladImage from '../assets/salad.png'
import plateImage from '../assets/plate.png'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Carousal />

      {/* Category Section  */}
      <section className='w-10/12 mx-auto my-7 py-7'>
        <div data-aos="fade-up" className='flex items-center justify-between mb-7 max-sm:flex-wrap gap-4 max-sm:justify-center'>
          <h3 className='text-4xl font-bold text-(--color-text)'>Categories</h3>
          <div className='bg-(--color-bg) px-5 py-2 rounded-lg font-semibold hover:bg-(--color-primary) hover:text-white transition-colors ease-linear duration-300 cursor-pointer'>View All Categories</div>
        </div>
        <div data-aos="fade-up" className='flex items-center justify-center gap-7 py-5 flex-wrap'>
          {categories.map(category => {
            return <div
              key={category.name}
              className={`bg-linear-to-b ${category.color} border border-gray-200 rounded-xl w-fit p-7 flex flex-col items-center gap-7 hover:-skew-3 transition-transform ease-linear`}>
              <img src={category.img} alt={category.name} />
              <h4 className='font-semibold text-lg'>{category.name}</h4>
            </div>
          })}
        </div>
      </section>

      {/* Recipe Section  */}
      <section className='w-10/12 mx-auto'>
        <div data-aos="zoom-in" className='flex flex-col gap-4 items-center justify-center text-center py-10 mb-10'>
          <h2 className='font-bold text-4xl lg:text-5xl text-(--color-text)'>Simple and tasty recipes</ h2>
          <p className='text-lg text-center text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere recusandae explicabo a sunt ipsum nobis aperiam maxime odio, quos quaerat!</p>
        </div>

        <div className='flex items-center justify-center gap-7 py-5 flex-wrap'>
          {recipes.map((recipe, i) => {
            if (i == 3) {
              return <div key={recipe.name} className='w-76 h- overflow-hidden rounded-xl'>
                <img src={adsImage} alt="Ad Image" className='w-full h-90 object-cover' />
              </div>
            }
            return <RecipeCard key={recipe.name} recipe={recipe} />
          })}
        </div>
      </section>

      <section className='flex items-center justify-center max-lg:flex-wrap gap-7 w-10/12 mx-auto my-7 py-7'>
        <div className='flex flex-col gap-7 max-lg:items-center justify-center px-5'>
          <h2 className='text-4xl lg:text-6xl font-bold text-(--color-text) max-lg:text-center'>Everyone can be a chef <br className='max-lg:hidden' /> in their own kitchen</h2>
          <p className='text-gray-500 lg:w-1/2 max-lg:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus magni! Minus, sequi! Natus soluta rem commodi, illum dolorem dolores!</p>
          <LearnMoreButton />
        </div>
        <div className='bg-linear-to-b from-white to-(--color-bg) max-md:w-full max-md:mt-10  w-1/2 h-100 relative'>
          <img src={maleChefImage} alt="Male Chef Pic" className='absolute w-full bottom-0' />
        </div>
      </section>

      <section className='bg-linear-to-b from-white to-(--color-bg)/50'>
        <div className='w-10/12 mx-auto my-7 py-7'>
          <div data-aos="zoom-in" className='flex flex-col gap-4 items-center justify-center text-center py-10 mb-10'>
            <h2 className='font-bold text-4xl lg:text-5xl text-(--color-text)'>Checkout @FlavorFiesta on Instagram</ h2>
            <p className='text-lg text-center text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere recusandae explicabo a sunt ipsum nobis aperiam maxime odio, quos quaerat!</p>
          </div>
          <div className='flex items-center justify-center flex-wrap gap-7 py-5'>
            {posts.map((post) => {
              return <div key={post.alt} data-aos='zoom-in' className='border border-gray-200 rounded-xl overflow-hidden'>
                <img src={post.img} alt={post.alt} />
              </div>
            })}
          </div>

          <div data-aos='fade-down' className='flex items-center justify-center my-7'>
            <Link to={''} title='Visit our Instagram'>
              <ShareButton />
            </Link>
          </div>
        </div>
      </section>

      <section className='w-10/12 mx-auto py-7 my-7'>
        <div className='flex gap-4 items-center justify-between max-lg:flex-wrap py-10 mb-10'>
          <h2 data-aos='fade-right' className='font-bold text-4xl lg:text-5xl text-(--color-text) max-lg:text-center'>Try this delicious recipe to make your day</ h2>
          <p data-aos='fade-left' className='text-lg text-center text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere recusandae explicabo a sunt ipsum nobis aperiam maxime odio, quos quaerat!</p>
        </div>

        <div className='flex items-center justify-center gap-7 py-5 flex-wrap'>
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe.name} recipe={recipe} />
          })}
        </div>
      </section>

      <section data-aos='fade-up' className='w-10/12 mx-auto bg-(--color-bg) rounded-3xl my-7 h-fit md:h-100 relative overflow-hidden'>
        <img src={saladImage} alt="Salad PNG" className='absolute -left-7 -bottom-7 -z-10 max-md:w-56' />
        <img src={plateImage} alt="Plate PNG" className='absolute -right-7 -bottom-7 rounded-3xl -z-10 max-md:w-52' />
        <div className='flex flex-col gap-10 items-center justify-center py-10'>
          <div className='flex flex-col items-center justify-center gap-5 pt-5 px-5'>
            <h3 className='font-bold max-sm:text-3xl text-4xl lg:text-5xl text-(--color-text) text-center'>Deliciousness to your inbox</h3>
            <p className='text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Minus itaque temporibus nemo neque corporis ratione facilis obcaecati veniam fugit cum!</p>
          </div>
          <div className='flex gap-4 justify-center max-md:flex-wrap'>
            <label htmlFor="email" className=''>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='Enter your email'
                className='bg-white outline-none rounded-2xl w-72 md:w-100 text-gray-600 shadow-2xl py-4 px-7'
              />
            </label>
              <SubscribeButton />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
