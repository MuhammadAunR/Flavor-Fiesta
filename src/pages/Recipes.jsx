import { Heart, ListFilterPlus } from 'lucide-react'
import React, { useState } from 'react'
import { recipes } from '../components/Assets'
import RecipeCard from '../components/RecipeCard'
import SubscribeSection from '../components/SubscribeSection'
import Footer from '../components/Footer'

const Recipes = () => {
    const [category, setCategory] = useState("All")
    const [search, setSearch] = useState("")

    const filterProperties = [
        { category: 'All', color: 'hover:bg-gray-300 hover:ring-2 hover:ring-gray-400', active: 'bg-gray-300 ring-2 ring-gray-400' },
        { category: 'Meat', color: 'hover:bg-red-200 hover:ring-2 hover:ring-red-300', active: 'bg-red-200 ring-2 ring-red-300' },
        { category: 'Lunch', color: 'hover:bg-orange-200 hover:ring-2 hover:ring-orange-300', active: 'bg-orange-200 ring-2 ring-orange-300' },
        { category: 'Dessert', color: 'hover:bg-pink-200 hover:ring-2 hover:ring-pink-300', active: 'bg-pink-200 ring-2 ring-pink-300' },
        { category: 'Breakfast', color: 'hover:bg-yellow-200 hover:ring-2 hover:ring-yellow-300', active: 'bg-yellow-200 ring-2 ring-yellow-300' },
        { category: 'Chocolate', color: 'hover:bg-amber-950/30 hover:ring-2 hover:ring-amber-800/50', active: 'bg-amber-950/30 ring-2 ring-amber-800/50' },
        { category: 'Vegan', color: 'hover:bg-green-200 hover:ring-2 hover:ring-green-300', active: 'bg-green-200 ring-2 ring-green-300' },
        { category: 'Favorite', color: 'hover:bg-red-500 hover:ring-2 hover:ring-red-300', active: 'bg-red-500 ring-2 ring-red-300' },
    ];

    const filteredRecipes = recipes.filter(item => {
        const matchedCategory = category === 'All' ? true : category === 'Favorite' ? item.favorite : item.category === category
        const searchedRecipe = item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase())
        return matchedCategory && searchedRecipe;
    })

    const handleCategory = (cat) => {
        setCategory(cat)
    }

    return (
        <>
            <header className='pt-32 my-5 mx-5 md:w-10/12 md:mx-auto'>
                <section className='flex gap-5 items-center justify-center max-md:flex-col'>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search a recipe'
                        className='w-10/12 bg-(--color-bg) rounded-full py-3 px-7 text-gray-600 text-lg outline-none ring-2 ring-(--color-second) transition-all ease-linear' />
                    <button className='py-3 px-10 rounded-full w- bg-(--color-bg) text-(--color-text) font-semibold text-lg hover:bg-(--color-bg) ring-2 ring-(--color-second) transition-all ease-linear cursor-pointer'>Search</button>
                </section>
                <div className='my-7 flex gap-7 items-center max-md:flex-col'>
                    <div className='flex gap-1 items-center bg-gray-200 w-fit h-fit px-5 py-3 rounded-full ring-2 ring-gray-400'>
                        <span className='font-semibold text-lg'>Filters</span>
                        <ListFilterPlus />
                    </div>

                    <div className='bg-gray-400 w-full h-px md:w-px md:h-14'></div>

                    <div className='flex items-center max-md:justify-center gap-5 flex-wrap'>
                        {filterProperties.map(item => {
                            return <div key={item.category} onClick={() => handleCategory(item.category)} className={`flex gap-1 items-center ${category === item.category ? item.active : "bg-gray-300"} w-fit px-5 py-3 rounded-full cursor-pointer ${item.color} transition-all ease-linear duration-300`}>
                                <span className='font-semibold text-lg'>{item.category}</span>
                                {item.category === "Favorite" &&
                                    <span className='group-hover:text-red-300 transition-all ease-linear duration-200'>
                                        <Heart />
                                    </span>}
                            </div>
                        })}
                    </div>
                </div>
            </header>

            <section className='mx-5 md:w-10/12 md:mx-auto mt-10'>
                <h3 className='text-(--color-text) font-bold text-5xl py-5 text-center'>Recipes</h3>
                <div className='flex items-center justify-center gap-7 py-5 flex-wrap'>
                    {/* {searchedRecipe.length > 0 &&
                        searchedRecipe.map((recipe) => {
                            return <RecipeCard key={recipe.name} recipe={recipe} />
                        })
                    } */}
                    {filteredRecipes.map((recipe) => {
                        return <RecipeCard key={recipe.name} recipe={recipe} />
                    })}
                </div>

                <h4 data-aos='zoom-in' className='font-semibold text-xl text-center pt-7 italic'>More Recipes coming soon</h4>
                <div className='w-full h-px bg-gray-300 my-10'></div>
            </section>

            <SubscribeSection />
            <Footer />
        </>
    )
}

export default Recipes
