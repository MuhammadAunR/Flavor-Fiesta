import React from 'react'
import Carousal from '../components/Carousal'
import category1 from '../assets/category-1.webp'
import category2 from '../assets/category-2.webp'
import category3 from '../assets/category-3.webp'
import category4 from '../assets/category-4.webp'
import category5 from '../assets/category-5.webp'
import category6 from '../assets/category-6.webp'

const Home = () => {
  const categories = [
    { img: category1, name: 'Breakfast', color: 'from-white to-yellow-100' },
    { img: category2, name: 'Vegan', color: 'from-white to-green-100' },
    { img: category3, name: 'Meat', color: 'from-white to-red-100' },
    { img: category4, name: 'Dessert', color: 'from-white to-pink-100' },
    { img: category5, name: 'Lunch', color: 'from-white to-orange-100' },
    { img: category6, name: 'Chocolate', color: 'from-white to-amber-100' },
  ];
  return (
    <>
      <Carousal />

      <section className='w-10/12 mx-auto my-7 py-7'>
        <div className='flex items-center justify-between'>
          <h3 className='text-4xl font-bold text-(--color-text)'>Categories</h3>
          <div className='bg-(--color-bg) px-5 py-2 rounded-lg font-semibold hover:bg-(--color-primary) hover:text-white transition-colors ease-initial cursor-pointer'>View All Categories</div>
        </div>
        <div className='flex items-center justify-center gap-7 py-5 flex-wrap'>
          {categories.map(category => {
            return <div key={category.name} className={`bg-linear-to-b ${category.color} border border-gray-200 rounded-xl w-fit p-7 flex flex-col items-center gap-7 hover:-skew-3 transition-transform ease-linear`}>
              <img src={category.img} alt={category.name} />
              <h4 className='font-semibold text-lg'>{category.name}</h4>
            </div>
          })}
        </div>
      </section>
    </>
  )
}

export default Home
