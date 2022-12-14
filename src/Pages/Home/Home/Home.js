import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BookSlider from '../BookSlider/BookSlider';
import Counter from '../Counter/Counter';
import Navigation from '../Navigation/Navigation/Navigation';
import NavTop from '../Navigation/NavTop/NavTop';
const Home = () => {
    return (
        <div>
            <NavTop />
            <Navigation />
            <Banner />
            <Counter />
            <BookSlider/>
            <Footer />
        </div>
    );
};

export default Home;