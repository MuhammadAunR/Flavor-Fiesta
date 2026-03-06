import saladImage from '../assets/salad.png'
import plateImage from '../assets/plate.png'
import { SubscribeButton } from './ButtonUi'

const SubscribeSection = () => {
    return (
        <>
            <section data-aos='fade-up' className='mx-5 md:w-10/12 md:mx-auto bg-(--color-bg) rounded-3xl my-7 h-fit md:h-100 relative overflow-hidden'>
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
        </>
    )
}

export default SubscribeSection
