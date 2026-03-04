import React from 'react'
import { useParams } from 'react-router-dom'
import { recipes } from '../components/Assets';
import { Clock9, Printer, Share2, UtensilsCrossed } from 'lucide-react';

const RecipeDetails = () => {
    const params = useParams();

    const recipe = recipes.find(item => (item.name.toLowerCase().trim().replace(/\s+/g, "-") === params.recipe));
    console.log(recipe)

    return (
        <>
            <header className='pt-36 w-10/12 mx-auto'>
                <section className='flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-7'>
                        <h1 className='text-4xl font-bold text-(--color-text)'>{recipe.name}</h1>

                        <div className='flex gap-7 items-center'>
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

                    <div className='flex gap-7 items-center'>
                        <div className='flex flex-col gap-3 items-center relative group'>
                            <span className='bg-(--color-bg) w-fit p-5 rounded-full hover:bg-(--color-primary) hover:text-white transition-colors ease-linear cursor-pointer'><Printer size={30} /></span>
                            <h5 className='font-semibold absolute group-hover:translate-y-18 -z-10 transition-transform ease-linear duration-300'>Print</h5>
                        </div>
                        <div className='flex flex-col gap-3 items-center relative group'>
                            <span className='bg-(--color-bg) w-fit p-5 rounded-full hover:bg-(--color-primary) hover:text-white transition-colors ease-linear cursor-pointer'><Share2 size={30} /></span>
                            <h5 className='font-semibold absolute group-hover:translate-y-18 -z-10 transition-transform ease-linear duration-300'>Share</h5>
                        </div>
                    </div>
                </section>
            </header>

            <section className='w-10/12 mx-auto my-7 flex gap-7'>
                <div className='rounded-2xl overflow-hidden h-fit'>
                    <img src={recipe.img} alt={recipe.name} className='object-cover w-full' />
                </div>
                <div className='bg-(--color-bg) rounded-2xl p-5 flex flex-col gap-10 w-200'>
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
        </>
    )
}

export default RecipeDetails
