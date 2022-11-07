import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Conatct from '../Contact/Conatct';
import Products from '../Products/Products';



const Home = () => {
    return (
        <div>
            
           
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Conatct></Conatct>
            
        </div>
    );
};

export default Home;