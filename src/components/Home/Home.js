import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewsTeller from '../NewsTeller/NewsTeller';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css';


const Home=()=>{

    return(
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services> 
            <NewsTeller></NewsTeller>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    )
}
export default Home;