import { HeroSectionButton } from '../components/ButtonUi';
import { useState, useEffect, useRef } from 'react';
import { slides } from '../components/Assets'
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const Carousal = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState('next'); // 'next' | 'prev'
  const [displayed, setDisplayed] = useState(0);
  const timerRef = useRef(null);

  const goTo = (index, dir = 'next') => {
    if (sliding || index === current) return;
    setDirection(dir);
    setSliding(true);
    setCurrent(index);
    setTimeout(() => {
      setDisplayed(index);
      setSliding(false);
    }, 500);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length, 'prev');
  const next = () => goTo((current + 1) % slides.length, 'next');

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const next = (c + 1) % slides.length;
        setDirection('next');
        setSliding(true);
        setTimeout(() => {
          setDisplayed(next);
          setSliding(false);
        }, 500);
        return next;
      });
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const slideInFrom = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
  const slideOutTo = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { transform: ${slideInFrom}; }
          to   { transform: translateX(0); }
        }
        @keyframes slideOut {
          from { transform: translateX(0); }
          to   { transform: ${slideOutTo}; }
        }
        .slide-in  { animation: slideIn  0.5s cubic-bezier(.4,0,.2,1) forwards; }
        .slide-out { animation: slideOut 0.5s cubic-bezier(.4,0,.2,1) forwards; }
      `}</style>

      <main data-aos="fade-up" className='pt-32 w-10/12 mx-auto relative'>
        <section className='relative overflow-hidden rounded-2xl'>

          <div className='relative w-full h-[calc(100vh-130px)]'>

            {sliding && (
              <div className='absolute inset-0 slide-out'>
                <img
                  src={slides[displayed].image}
                  alt=""
                  className='brightness-50 w-full h-full object-cover'
                />
              </div>
            )}

            <div className={`absolute inset-0 ${sliding ? 'slide-in' : ''}`}>
              <img
                src={slides[current].image}
                alt=""
                className='brightness-50 w-full h-full object-cover'
              />
            </div>
          </div>

          <div className='flex flex-col gap-10 items-start justify-center absolute top-36 left-10 px-10 z-10'
            style={{
              opacity: sliding ? 0 : 1,
              transform: sliding ? 'translateY(12px)' : 'translateY(0)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
              transitionDelay: sliding ? '0s' : '0.25s',
            }}
          >
            <h4 className='bg-(--color-bg) w-fit px-5 py-1 font-semibold uppercase rounded-full'>
              {slides[current].tag}
            </h4>
            <h1 className='font-bold text-7xl text-gray-200'>{slides[current].title}</h1>
            <p className='text-xl text-gray-200 max-w-2xl'>{slides[current].description}</p>

            <div className='flex items-center gap-5'>
              <div className='bg-(--color-bg) flex gap-2 items-center w-fit px-5 py-1 font-semibold rounded-full'>
                <ClockIcon />
                <span>{slides[current].time}</span>
              </div>
              <div className='bg-(--color-bg) flex gap-2 items-center w-fit px-5 py-1 font-semibold rounded-full'>
                <ForkIcon />
                <span>{slides[current].category}</span>
              </div>
            </div>

            <HeroSectionButton />
          </div>

          {/* Prev Arrow */}
          <button
            onClick={prev}
            className='absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/65 text-white rounded-full w-11 h-11 flex items-center justify-center text-2xl transition'
          >
            <ChevronLeft />
          </button>

          {/* Next Arrow */}
          <button
            onClick={next}
            className='absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/65 text-white rounded-full w-11 h-11 flex items-center justify-center text-2xl transition'
          >
            <ChevronRight />
          </button>

          {/* Dot Indicators */}
          <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20'>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70 w-2.5'
                  }`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Carousal;