import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import slide4 from './assets/slide4.png';
import Line5 from './assets/Line 5.png';
import lineImage from './assets/Line.png';


const CustomSlide = () => {
    const images = [
        slide1,
        slide2,
        slide3,
        slide4,
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <div class='Allbackground-texts'>

                        <div class='Slide1-headers'>
                        <h1 class='Slide1-heading-1'>Diverse Marketplace For Dog Enthusiasts</h1>
                        <h2 class='Slide1-heading-2'>Connect With Buyers & Sellers of Puppies</h2>
                        </div>
                        
                        <div class='Slide1-paragraph'>
                        <p><img className='Line6' src={Line5} />Puppies are entrusted to us like precious seeds. We water them with praise, patience and love and watch them grow into full bloom </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <div class='Slide2-headers'>
                        <h1 class='Slide2-heading-1'>Discover Your Furry Companion</h1>
                        <h2 class='Slide2-heading-2'>Adorable Puppies Await !</h2>
                        </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <div class='Slide3-paragraph'>
                    <img className='Slide3-LineImage' src={lineImage} />
                    <p>Embrace care and companionship with every checkup. As compassionate veterinarians are dedicated to ensure the wellbeing of our furry friends</p>
                    <p>As compassionate veterinarians are dedicated to ensure the wellbeing of our furry friends</p>
                    <img className='Slide3-LineImage' src={lineImage} />
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
        </Slide>
    );
};

export default CustomSlide;

