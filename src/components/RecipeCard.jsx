import React from 'react'
import { Link } from 'react-router-dom';

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
    </svg>
);

const ForkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
    </svg>
)

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipeDetails/${recipe.name.toLowerCase().trim().replace(/\s+/g, "-")}`}>
            <div data-aos='zoom-in' className={`relative w-72 h-90 cursor-pointer overflow-hidden flex flex-col gap-4 rounded-xl bg-linear-to-b ${recipe.color} group`}>
                <span className={`absolute top-4 right-4 z-20 group-hover:rotate-y-180 duration-500 transition-transform ease-linear rounded-full ${recipe.favorite === true ? 'text-red-500' : 'text-white'}`}>
                    <HeartIcon />
                </span>
                <img src={recipe.img} alt={recipe.name} className='w-full h-52 object-cover overflow-hidden group-hover:scale-105 transition-transform ease-linear' />
                <h3 className='font-semibold text-lg px-2'>{recipe.name}</h3>
                <div className='flex items-center gap-3 px-2 pt-3 flex-wrap'>
                    <div className='bg-(--color-bg) flex gap-1 items-center w-fit px-2 py-1 font-semibold rounded-full'>
                        <ClockIcon />
                        <span className='text-sm'>{recipe.time}</span>
                    </div>
                    <div className='bg-(--color-bg) flex gap-1 items-center w-fit px-2 py-1 font-semibold rounded-full'>
                        <ForkIcon />
                        <span className='text-sm'>{recipe.category}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard
