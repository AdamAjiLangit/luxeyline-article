'use client';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const AnimatedButton = () => {
    return (
        <StyledWrapper>
            <Link href="/register" className='button'>
                Register
                <div className="arrow-wrapper">
                    <div className="arrow" />
                </div>
            </Link>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
    --primary-color: #fff;
    --secondary-color: #000;
    --hover-color: #111;
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    color: var(--secondary-color);
    padding: 1em 1.8em;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
  }

  .button .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }

  .button .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--primary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }

  .button:hover {
    background-color: var(--hover-color);
    color: var(--primary-color);
  }

  .button:hover .arrow {
    background: var(--primary-color);
  }

  .button:hover .arrow:before {
    right: 0;
  }`;

export default AnimatedButton;
