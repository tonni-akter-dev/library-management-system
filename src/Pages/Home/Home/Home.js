import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation/Navigation';
import NavTop from '../Navigation/NavTop/NavTop';

const Home = () => {
    return (
        <div>
            <NavTop />
            <Navigation />
           <Banner/>                                          
        </div>
    );
};

export default Home;