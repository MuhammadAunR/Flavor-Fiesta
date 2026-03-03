import React from 'react';
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
