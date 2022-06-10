import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Login from './Login';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className="d-flex flex-row align-items-center container hero">
                <div className='login'>
                    <Login></Login>
                </div>
                <div className='banner'>
                    <Banner></Banner>
                </div>
            </div>
            
        </>
    );
};

export default Home;