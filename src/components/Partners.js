import React, { useEffect, useState, useRef } from 'react';
import harwardLogo from '../assets/svg/harward.svg';
import freepikLogo from '../assets/svg/freepik.svg';
import korenUniversityLogo from '../assets/svg/korea.svg';
import mitLogo from '../assets/svg/mit.svg';
import necLogo from '../assets/svg/nec.svg';
import nvidiaLogo from '../assets/svg/nvidia.svg';
import riceUniversityLogo from '../assets/svg/rice-uni.svg';

const Partners = () => {
    const sliderRef = useRef(null);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');

        const handleResize = () => {
            setIsTablet(mediaQuery.matches);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const partnersImages = [
        freepikLogo,
        harwardLogo,
        korenUniversityLogo,
        mitLogo,
        necLogo,
        riceUniversityLogo,
        nvidiaLogo
    ];

    const duplicatedImages = [...partnersImages, ...partnersImages];

    return (
        <section className="hidden md:flex flex-col items-center justify-between gap-8 py-5 lg:pb-10 overflow-hidden">
            <p className='p1-paragraph secondary-text font-extrabold'>Partners who trust our services:</p>
            <div
                ref={sliderRef}
                className="flex flex-row items-center justify-between gap-8 image-slider"
                style={{
                    animation: isTablet ? 'slide 20s linear infinite' : 'none'
                }}
            >
                {(isTablet ? duplicatedImages : partnersImages).map((image, index) => (
                    <div key={index} className="w-full h-full flex items-center justify-center">
                        <img
                            src={image}
                            alt={`Partner ${index + 1}`}
                            className="w-full h-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 filter transition duration-300 max-h-[76px]"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
