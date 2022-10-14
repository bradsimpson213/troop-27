import React from 'react';
import LoginForm from '../auth/LoginForm';
import ScoutMaster from '../Scoutmaster';
import './Landing.css';



const Landing = () => {


    return(
        <>
            <h1>My Home Page</h1>
            <ScoutMaster />
            <LoginForm />
        </>
    );
};

export default Landing;