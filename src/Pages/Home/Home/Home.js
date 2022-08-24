import React from 'react';
import About from '../About/About';
import Navigation from '../Navigation/Navigation/Navigation';
import NavTop from '../Navigation/NavTop/NavTop';

const Home = () => {
    return (
        <div>
            <NavTop />
            <Navigation />
            <About />
        </div>
    );
};

export default Home;