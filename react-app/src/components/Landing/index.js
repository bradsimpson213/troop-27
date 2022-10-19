import React from 'react';
import useToggle from '../../hooks/useToggle'
// component imports
import LoginModal from '../LoginModal'
import './Landing.css';
import BSALogoBig from './BSA_logo.png'



const Landing = () => {
    const [ modalOpen, setModalOpen ] = useToggle(false)

    return(
        <>
            <div className='landing-main-container'>
                <h1 className='landing-title'>
                    Welcome to Troop 27!
                </h1>
                <div className='landing-logo-container'>
                    <img 
                        src={ BSALogoBig }
                        alt='BSA Logo'
                        className='landing-logo'
                    />
                </div> 
                { modalOpen ? <LoginModal /> : '' }
                <button 
                    className="landing-button"
                    onClick={ setModalOpen }
                    >
                    { !modalOpen ? "Login" : "Close Modal" }
                </button>
            </div>
        </>
    );
};

export default Landing;