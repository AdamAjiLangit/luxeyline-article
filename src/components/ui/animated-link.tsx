import React from 'react';
import Link from 'next/link';
import { AnimatedLinkProps } from '@/types/types';

const AnimatedLink = ({ href, text, customStyle, target }: AnimatedLinkProps) => {
    return (
        <Link href={href} target={target}>
            <button className="cta">
                <span className={`hover-underline-animation ${customStyle}`}>{text}</span>
                {/* <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width={30} height={10} viewBox="0 0 46 16">
              <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" />
          </svg> */}
            </button>
        </Link>
    );
}

export default AnimatedLink;