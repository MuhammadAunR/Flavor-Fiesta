import React from 'react'
import { Link } from 'react-router-dom'
import { navOptions } from './Assets'

const Footer = () => {
    return (
        <>
            <footer className='w-10/12 mx-auto mt-10'>
                <section className='flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-3'>
                        <div className="logo">
                            <Link to={'/'} className='cursor-pointer'>
                                <h2 style={{ fontFamily: "'Story Script', cursive" }} className='text-3xl font-bold text-(--color-text)'>FlavorFiesta<span className='text-(--color-primary)'>.</span></h2>
                            </Link>
                        </div>
                        <p>"Discover and share delicious recipes from around the world, all in one place.”</p>
                    </div>

                    <ul className='flex items-center justify-center gap-5 text-lg font-semibold max-xl:hidden'>
                        {navOptions.map((item) => (
                            <div key={item.name}>
                                <Link to={item.toLink}>
                                    <li
                                        className='relative cursor-pointer px-3 py-1 group'
                                    >
                                        <span className='absolute inset-0 rounded-full bg-(--color-primary) scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out origin-center -z-10' />
                                        <span className='group-hover:text-white transition-colors ease-linear'>
                                            {item.name}
                                        </span>
                                    </li>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </section>

                <div className='bg-gray-300 w-full h-px mt-7'></div>

                <div className='my-5 italic'>
                    <div className='flex flex-wrap gap-2 items-baseline justify-center text-sm'>
                        <div className='flex gap-2'>
                            &copy; 2026
                            <h2
                                style={{ fontFamily: "'Story Script', cursive" }}
                                className='font-bold text-(--color-text)'>
                                FlavorFiesta
                                <span className='text-(--color-primary)'>.</span>
                            </h2>
                        </div>
                        <div>
                            Developed by <Link target='_blank' to={'https://github.com/MuhammadAunR/'} className='hover:text-blue-500 transition-colors ease-in-out hover:underline cursor-pointer font-semibold'>Muhammad Aun R</Link></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
