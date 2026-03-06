import React from 'react'
import maleChefImage from '../assets/maleChefImage.webp'
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
import { recipes } from '../components/Assets';
import RecipeCard from '../components/RecipeCard';

const Contact = () => {
    return (
        <>
            <header className='pt-32 mx-5 md:w-10/12 md:mx-auto flex items-center justify-between gap-7 max-md:flex-col'>

                <div data-aos='fade-right' className='bg-linear-to-b from-white to-(--color-bg) max-md:mt-10 w-full md:w-1/2 h-140 rounded-xl relative'>
                    <img src={maleChefImage} alt="Male Chef Pic" className='absolute w-150 bottom-0' />
                </div>

                <form data-aos='fade-left' action="submit" className='flex flex-col gap-5 h-fit py-5 mx-5 w-full md:w-10/12 md:mx-auto'>
                    <div className='flex gap-5 w-full max-lg:flex-col'>
                        <label htmlFor="name" className='flex flex-col gap-2 w-full'>
                            <span className='font-semibold text-lg'>Name</span>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                placeholder='Enter your name...'
                                className='outline-none ring-1 ring-gray-300 rounded-lg py-2 px-5 text-gray-500 w-full hover:ring-gray-400 transition-colors ease-linear duration-500' />
                        </label>
                        <label htmlFor="email" className='flex flex-col gap-2 w-full'>
                            <span className='font-semibold text-lg'>Email</span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter your email...'
                                className='outline-none ring-1 ring-gray-300 rounded-lg py-2 px-5 text-gray-500 w-full hover:ring-gray-400 transition-colors ease-linear duration-500' />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label htmlFor="subject" className='flex flex-col gap-2 w-full'>
                            <span className='font-semibold text-lg'>Subject</span>
                            <input
                                type="text"
                                id='subject'
                                name='subject'
                                placeholder='Enter subject...'
                                className='outline-none ring-1 ring-gray-300 rounded-lg py-2 px-5 text-gray-500 w-full hover:ring-gray-400 transition-colors ease-linear duration-500' />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="description" className='flex flex-col gap-2'>
                            <span className='font-semibold text-lg'>Description</span>
                            <textarea
                                name="description"
                                id="description"
                                placeholder='Explain your situation...'
                                rows={10}
                                className='outline-none ring-1 ring-gray-300 rounded-lg py-2 px-5 text-gray-500 hover:ring-gray-400 transition-colors ease-linear duration-500' />
                        </label>
                    </div>
                    <button type="submit" className='py-3 px-10 rounded-2xl w-fit bg-(--color-primary) text-white font-semibold text-lg hover:bg-(--color-bg) hover:text-(--color-text) ring-2 ring-white shadow-[0_7px_10px_rgba(0,0,0)] hover:shadow-[0_7px_10px_rgba(0,0,0,0.50)] hover:ring-(--color-second) transition-all ease-linear cursor-pointer'>Submit</button>
                </form>

            </header>

            <div className='my-10'>
                <SubscribeSection />
            </div>

            <section className='py-7 md:w-10/12 md:mx-auto mx-5'>
                <h3 className='font-semibold text-3xl text-(--color-text)'>Check out the  delicious recipe</h3>
                <div className='flex items-center justify-center gap-7 py-5 flex-wrap'>
                    {recipes.slice(3, 7).map((recipe) => {
                        return <RecipeCard key={recipe.name} recipe={recipe} />
                    })}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact;