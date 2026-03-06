import React from 'react'
import { useParams } from 'react-router-dom'
import { directions, recipes, steps } from '../components/Assets';
import { Clock9, Printer, Share2, UtensilsCrossed } from 'lucide-react';
import Checkbox from '../components/TaskCheckbox';
import adsImage from '../assets/ads.webp'
import SubscribeSection from '../components/SubscribeSection';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

const RecipeDetails = () => {
    const params = useParams();
    const recipe = recipes.find(item => (item.name.toLowerCase().trim().replace(/\s+/g, "-") === params.recipe));


    return (
        <>
            <header className='pt-32 mx-5 md:w-10/12 md:mx-auto'>
                <section className='flex items-center justify-between max-md:flex-col max-md:items-start gap-7'>
                    <div data-aos='fade-right' className='flex flex-col items-start gap-7'>
                        <h1 className='text-4xl font-bold text-(--color-text)'>{recipe.name}</h1>

                        <div className='flex gap-7 items-center flex-wrap'>
                            <div className='flex items-center gap-3'>
                                <span><Clock9 /></span>
                                <div className='flex flex-col items-start gap-w'>
                                    <h4 className='font-semibold'>Prep Time</h4>
                                    <h5 className='text-gray-500'>{recipe.time}</h5>
                                </div>
                            </div>
                            <div className='w-px h-16 bg-gray-500'></div>
                            <div className='flex items-center gap-3'>
                                <span><Clock9 /></span>
                                <div className='flex flex-col items-start gap-w'>
                                    <h4 className='font-semibold'>Cook Time</h4>
                                    <h5 className='text-gray-500'>{recipe.time}</h5>
                                </div>
                            </div>
                            <div className='w-px h-16 bg-gray-500'></div>
                            <div className='flex items-center gap-3'>
                                <span><UtensilsCrossed /></span>
                                <div className='flex flex-col items-start gap-w'>
                                    <h4 className='font-semibold'>{recipe.category}</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='w-full h-px bg-gray-500 md:hidden'></div>

                    <div data-aos='fade-left' className='flex gap-7 items-center flex-wrap justify-center'>
                        <div className='flex flex-col gap-3 items-center relative group'>
                            <span className='bg-(--color-bg) w-fit p-3 rounded-full hover:bg-(--color-primary) hover:text-white transition-colors ease-linear cursor-pointer'><Printer size={26} /></span>
                            <h5 className='absolute top-4 group-hover:translate-y-10 -z-5 transition-transform ease-linear duration-300 text-sm'>Print</h5>
                        </div>
                        <div className='flex flex-col gap-3 items-center relative group'>
                            <span className='bg-(--color-bg) w-fit p-3 rounded-full hover:bg-(--color-primary) hover:text-white transition-colors ease-linear cursor-pointer'><Share2 size={26} /></span>
                            <h5 className='absolute top-4 group-hover:translate-y-10 -z-5 transition-transform ease-linear duration-300 text-sm'>Share</h5>
                        </div>
                    </div>
                </section>
            </header>

            <section className='mx-5 md:w-10/12 md:mx-auto my-7 flex gap-7 max-lg:flex-col'>
                <div data-aos='fade-right' className='rounded-2xl overflow-hidden h-fit w-full lg:w-500'>
                    <img src={recipe.img} alt={recipe.name} className='object-cover w-full h-150' />
                </div>
                <div data-aos='fade-left' className='bg-(--color-bg) rounded-2xl p-5 flex flex-col gap-7 w-full lg:w-200 lg:h-150'>
                    <h3 className='text-(--color-text) font-semibold text-2xl'>Nutrition Information</h3>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold text-gray-500'>Calories</h4>
                            <p>{recipe.calories}</p>
                        </div>
                        <div className='w-full h-px bg-gray-500'></div>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold text-gray-500'>Total Fat</h4>
                            <p>{recipe.fat}</p>
                        </div>
                        <div className='w-full h-px bg-gray-500'></div>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold text-gray-500'>Protein</h4>
                            <p>{recipe.protein}</p>
                        </div>
                        <div className='w-full h-px bg-gray-500'></div>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold text-gray-500'>Carbohydrates</h4>
                            <p>{recipe.carbohydrate}</p>
                        </div>
                        <div className='w-full h-px bg-gray-500'></div>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold text-gray-500'>Cholesterol</h4>
                            <p>{recipe.cholesterol}</p>
                        </div>
                        <div className='w-full h-px bg-gray-500'></div>
                    </div>
                    <div>
                        <p className='text-justify text-gray-600 italic'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci modi, error autem at harum eius libero quae magnam ipsam nulla dolorem excepturi blanditiis provident? Repellendus tempora et culpa ipsum vero.</p>
                    </div>
                </div>
            </section>

            <section data-aos='zoom-in' className='mx-5 md:w-10/12 md:mx-auto py-7'>
                <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod et in debitis qui, aspernatur porro, inventore temporibus eius ex commodi. Possimus obcaecati necessitatibus perferendis maiores dicta. Magnam ratione voluptas aut ab. Illo est saepe magnam ipsa eum, molestias magni iusto autem minima animi excepturi pariatur doloribus consectetur ab praesentium, dicta hic assumenda ea repellat labore explicabo placeat. Et praesentium commodi, aperiam facilis suscipit voluptas ullam tenetur nisi possimus reprehenderit consequatur deleniti obcaecati tempore laboriosam unde, asperiores vitae eos rerum soluta. Necessitatibus aliquam aperiam amet cupiditate facere voluptate eius nam sed dicta, ullam dolores nihil eaque, accusantium odio. Ducimus, aliquid.</p>
            </section>

            <section className='mx-5 md:w-10/12 md:mx-auto my-7 flex gap-4 max-lg:flex-col'>

                <section className="left space-y-10">

                    <div className='space-y-2'>
                        <h2 data-aos='fade-right' className='font-bold text-3xl'>Ingredients</h2>

                        <section className='space-y-3'>
                            <h3 data-aos='fade-right' className='font-semibold text-xl'>For main dish</h3>
                            <div data-aos='fade-right'>
                                {steps.map(step => {
                                    return <Checkbox key={step.step} item={step} prefix="main" />
                                })}
                            </div>
                        </section>

                        <section className='space-y-3'>
                            <h3 data-aos='fade-right' className='font-semibold text-xl'>For the sauce</h3>
                            <div data-aos='fade-right'>
                                {steps.slice(3).map(step => {
                                    return <Checkbox key={step.step} item={step} prefix="sauce" />
                                })}
                            </div>
                        </section>

                    </div>

                    <div data-aos='fade-right' className='space-y-2'>
                        <h2 className='font-bold text-3xl'>Directions</h2>

                        <section className='space-y-3'>
                            <div>
                                {directions.map(direction => {
                                    return <>
                                        <Checkbox key={direction.step} item={direction} prefix="directions" />
                                        <p className='text-gray-600'>{direction.description}</p>
                                    </>
                                })}
                            </div>
                        </section>

                    </div>

                </section>


                <aside data-aos='fade-up' className=''>
                    <section className='space-y-7 bg-gray-100 rounded-xl p-3'>
                        <h3 className='font-bold text-2xl'>Other Recipes</h3>
                        <div className='flex flex-col items-center gap-3'>
                            {recipes.slice(2, 5).map(recipe => {
                                return <RecipeCard key={recipe.name} recipe={recipe} />
                            })}
                        </div>
                        <div key={recipe.name} className='w-76 h- overflow-hidden rounded-xl'>
                            <img src={adsImage} alt="Ad Image" className='w-full h-90 object-cover' />
                        </div>
                    </section>
                </aside>
            </section>

            <SubscribeSection />

            <section className='mx-5 md:w-10/12 md:mx-auto py-7'>
                <div className='flex gap-7 flex-wrap justify-center'>
                    {recipes.slice(4).map(recipe => {
                        return <RecipeCard key={recipe.name} recipe={recipe} />
                    })}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default RecipeDetails
