import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import slide4 from './assets/slide4.png';
import Line5 from './assets/Line 5.png';

class DemoCarousel extends Component {
    render() {
        return (
            <div className="block lg:hidden">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                    className="relative"
                >
                    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slide1})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center px-6 md:px-12">
                            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
                                Diverse Marketplace For Dog Enthusiasts
                            </h1>
                            <h2 className="text-white text-xl md:text-2xl lg:text-3xl mt-4">
                                Connect With Buyers & Sellers of Puppies
                            </h2>
                            <p className="text-white text-lg md:text-xl lg:text-2xl mt-8 flex items-center">
                                <span className="bg-yellow-400 inline-block w-2 h-2 mr-2"></span>
                                Puppies are entrusted to us like precious seeds. We water them with praise, patience and love and watch them grow into full bloom.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slide2})` }}>
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12">
                            <div className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-lg">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                    Discover Your Furry Companion
                                </h1>
                                <h2 className="text-xl md:text-2xl lg:text-3xl mt-2">
                                    Adorable Puppies Await!
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slide3})` }}>
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12">
                            <div className="bg-white bg-opacity-70 text-gray-800 p-4 rounded-lg max-w-md">
                                <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                                    Embrace care and companionship with every checkup.
                                </p>
                                <p className="text-sm md:text-base lg:text-lg mt-2">
                                    As compassionate veterinarians are dedicated to ensure the wellbeing of our furry friends.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slide4})` }}>
                        <div className="absolute top-8 left-6 md:left-12">
                            <div className="bg-white bg-opacity-70 p-4 rounded-lg max-w-lg">
                                <p className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-500">
                                    EMPOWERING PAWS:
                                </p>
                                <p className="text-sm md:text-base lg:text-lg text-white">
                                    Nurturing Canine Potential Through Training. Unleashing The Bond Between Humans and Their Furry Companions.
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-6 md:left-12">
                            <div className="bg-white bg-opacity-70 p-4 rounded-lg max-w-lg">
                                <p className="text-sm md:text-base lg:text-lg text-white">
                                    Find the perfect dog trainer on our website and strengthen your bond with your canine companion.
                                    Our skilled trainers use positive reinforcement to teach obedience and enhance your dog’s happiness.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default DemoCarousel;
