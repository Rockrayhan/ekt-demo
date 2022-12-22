import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Conatct from '../Contact/Conatct';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';



const Home = () => {
    return (
        <div>
            
            <Header></Header>


            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Conatct></Conatct>

            <Footer></Footer>
            
        </div>
    );
};

export default Home;