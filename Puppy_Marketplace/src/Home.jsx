
import lineImage from './assets/Line.png';
import homeImage from './assets/home.png';
import botImage from './assets/bot.png';
import globeImage from './assets/globe.png';
import chevronDown from './assets/chevron-down.png';
import Logo2 from './assets/Logo 2.png';
import UserImage from './assets/user.png';
import Line5 from './assets/Line 5.png';
import SearchImage from './assets/search.png';
import CustomSlide from './Slide'; 
import 'react-slideshow-image/dist/styles.css';

function Home() {
    return (
        <div className='gradient-background'>
            <div className='Nav-1'>
                <div className='leftside'>
                    <div className='leftside-section1'>
                        <img className='homeImage' src={homeImage} />
                    </div>
                    <div className='leftside-section2'>
                        <p className='homeTitle'>Home</p>
                        <img className='lineImage' src={lineImage} />
                    </div>
                </div>
                <div className='rightside'>
                    <div className='rightsidesection1'>
                        <img className='globeImage' src={globeImage} />
                        <p className='chooseCountry'>Choose Country</p>
                        <img className='chevronDown' src={chevronDown} />
                    </div>
                    <div className='rightsidesection2'>
                        <img className='botImage' src={botImage} />
                        <p className='HelpCenter'>Help Center</p>
                    </div>
                </div>
            </div>

            <div className='Nav-2'>
                <img className='Logo2' src={Logo2} />
                <p className='PuppyMarketplace'>PUPPY MARKETPLACE</p>
                <input type='search' className='searchBox' placeholder='Search...' />
                <button className='searchButton'><img className='SearchImage' src={SearchImage} /></button>
                <img className='UserImage' src={UserImage} />
                <p className='SignIn'>Sign In</p>
                <img className='Line5' src={Line5} />
                <p className='Register'>Register</p>
            </div>

            
            <CustomSlide />

        </div>
    );
}

export default Home;