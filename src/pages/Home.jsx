import React from 'react'
import Carousal from '../components/Carousal'
import RecipeCard from '../components/RecipeCard'
import { categories, posts } from '../components/Assets'
import { recipes } from '../components/Assets'
import adsImage from '../assets/ads.webp'
import maleChefImage from '../assets/maleChefImage.webp'
import { LearnMoreButton, ShareButton } from '../components/ButtonUi'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SubscribeSection from '../components/SubscribeSection'

const Home = () => {
  return (
    <>
      <Carousal />

      {/* Category Section  */}
      <section className='mx-5 md:w-10/12 md:mx-auto my-7 py-7'>
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
      <section className='mx-5 md:w-10/12 md:mx-auto'>
        <div data-aos="zoom-in" className='flex flex-col gap-4 items-center justify-center text-center py-10 mb-10'>
          <h2 className='font-bold text-4xl lg:text-5xl text-(--color-text)'>Simple and tasty recipes</ h2>
          <p className='text-lg text-center text-gray-600'>
            Explore our hand-picked collection of easy, flavorful recipes crafted for every skill level. Whether you're cooking for one or feeding a crowd, there's something here for everyone.
          </p>
        </div>

        <div className='flex items-center justify-center gap-7 py-5 flex-wrap'>
          {recipes.slice(1, 9).map((recipe, i) => {
            if (i == 3) {
              return <div key={recipe.name} className='w-76 h- overflow-hidden rounded-xl'>
                <img src={adsImage} alt="Ad Image" className='w-full h-90 object-cover' />
              </div>
            }
            return <RecipeCard key={recipe.name} recipe={recipe} />
          })}
        </div>
      </section>

      <section className='flex items-center justify-center max-lg:flex-wrap gap-7 mx-5 md:w-10/12 md:mx-auto my-7 py-7'>
        <div data-aos='fade-right' className='flex flex-col gap-7 max-lg:items-center justify-center px-5'>
          <h2 className='text-4xl lg:text-6xl font-bold text-(--color-text) max-lg:text-center'>Everyone can be a chef <br className='max-lg:hidden' /> in their own kitchen</h2>
          <p className='text-gray-500 lg:w-1/2 max-lg:text-center'>
            You don't need a culinary degree to cook incredible food. With the right guidance, fresh ingredients, and a little confidence, anyone can create restaurant-quality meals right at home.
          </p>
          <LearnMoreButton />
        </div>
        <div data-aos='fade-left' className='bg-linear-to-b from-white to-(--color-bg) max-md:w-full max-md:mt-10  w-1/2 h-100 relative'>
          <img src={maleChefImage} alt="Male Chef Pic" className='absolute w-full bottom-0' />
        </div>
      </section>

      <section className='bg-linear-to-b from-white to-(--color-bg)/50'>
        <div className='mx-5 md:w-10/12 md:mx-auto my-7 py-7'>
          <div data-aos="zoom-in" className='flex flex-col gap-4 items-center justify-center text-center py-10 mb-10'>
            <h2 className='font-bold text-4xl lg:text-5xl text-(--color-text)'>Checkout @FlavorFiesta on Instagram</ h2>
            <p className='text-lg text-center text-gray-600'>
              Follow us on Instagram for daily recipe inspiration, behind-the-scenes kitchen moments, and food photography that will make you hungry at any hour of the day.
            </p>
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

      <section className='mx-5 md:w-10/12 md:mx-auto py-7 my-7'>
        <div className='flex gap-4 items-center justify-between max-lg:flex-wrap py-10 mb-10'>
          <h2 data-aos='fade-right' className='font-bold text-4xl lg:text-5xl text-(--color-text) max-lg:text-center'>Try this delicious recipe to make your day</ h2>
          <p className='text-lg text-center text-gray-600'>
            From quick weeknight dinners to weekend showstoppers, these recipes are tested, loved, and guaranteed to bring something special to your table today.
          </p>
        </div>

        <div className='flex items-center justify-center gap-7 py-5 flex-wrap'>
          {recipes.slice(3, 7).map((recipe) => {
            return <RecipeCard key={recipe.name} recipe={recipe} />
          })}
        </div>
      </section>

      <SubscribeSection />

      <Footer />
    </>
  )
}

export default Home
