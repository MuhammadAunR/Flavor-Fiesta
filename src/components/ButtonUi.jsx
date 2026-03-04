import styled from 'styled-components';

const HeroSectionButton = () => {
    return (
        <StyledWrapper>
            <button>View Recipes</button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  button {
   appearance: none;
   background-color: #E67514;
   border: 0.125em solid #fff;
   border-radius: 5rem;
   box-sizing: border-box;
   color: #fff;
   cursor: pointer;
   display: inline-block;
   font-size: 16px;
   font-weight: 600;
   line-height: normal;
   margin: 0;
   min-height: 3.75em;
   min-width: 0;
   outline: none;
   padding: 1em 2.3em;
   text-align: center;
   text-decoration: none;
   transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   will-change: transform;
  }

  button:disabled {
   pointer-events: none;
  }

  button:hover {
   color: #fff;
   background-color: #E67514;
   box-shadow: rgb(211, 236, 205) 0 8px 15px;
   border: 0.125em solid #fff;
   transform: translateY(-2px);
  }

  button:active {
   box-shadow: none;
   transform: translateY(0);
  }`;

export { HeroSectionButton };


const LearnMoreButton = () => {
    return (
        <button className="relative border hover:border-[#CF6812] duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-[#9D4E0E] p-2 flex justify-center items-center font-extrabold">
            <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg[#84420C] delay-150 group-hover:delay-75" />
            <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#9D4E0E] delay-150 group-hover:delay-100" />
            <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#B65B10] delay-150 group-hover:delay-150" />
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#CF6812] delay-150 group-hover:delay-200" />
            <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#E67514] delay-150 group-hover:delay-300" />
            <p className="z-10">Learn More</p>
        </button>
    );
}

export { LearnMoreButton };


const ShareButton = () => {
    return (
        <StyledWrapper2>
            <button className="Btn">
                <span className="svgContainer">
                    <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                </span>
                <span className="BG" />
            </button>
        </StyledWrapper2>
    );
}

const StyledWrapper2 = styled.div`
  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all .3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all .3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }`;

export { ShareButton };


const SubscribeButton = () => {
  return (
    <StyledWrapper3>
      <button className="button type1">
      </button>
    </StyledWrapper3>
  );
}

const StyledWrapper3 = styled.div`
  .button {
    height: 55px;
    width: 150px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .button:hover {
    box-shadow: .5px .5px 150px #252525;
  }

  .type1::after {
    content: "Thanks";
    height: 55px;
    width: 150px;
    background-color: #E67514;
    color: #fff;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(50px);
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1::before {
    content: "Subscribe";
    height: 50px;
    width: 150px;
    background-color: #fff;
    color: #E67514;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(0px) scale(1.2);
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1:hover::after {
    transform: translateY(0) scale(1.2);
  }

  .type1:hover::before {
    transform: translateY(-50px) scale(0) rotate(120deg);
  }`;

export  {SubscribeButton};

