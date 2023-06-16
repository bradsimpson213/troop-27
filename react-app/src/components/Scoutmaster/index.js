import React from 'react';
import './Scoutmaster.css';
import ScoutmasterProfile from "./sm-profile.png"

const Scoutmaster = () =>{

    return(
        <>
            <div className='scoutmaster-container'>
                <div className='scoutmaster-header'>
                    <img 
                        src={ ScoutmasterProfile } 
                        alt="scoutmaster's headshot"
                        className='scoutmaster-profile'
                    />
                    <h3 className='scoutmaster-title'>Scoutmaster's Corner</h3>
                </div>
                <div className='scoutmaster-parent'>
                    <p className='scoutmaster-text'> 
                        Welcome to Troop 27's Boy Scout program for 2023-24.  
                        I am excited and thrilled to kick-off another year of Scouting at Troop 27!
                    </p>
                    <p className='scoutmaster-text'>
                        It's not possible for one leader to make this program a success for your children - so PLEASE volunteer to help us.  
                        It takes the dedication & help of dozens of parents as Adult Leaders, Committee Members, and Event Volunteers. 
                        The Boy's have planned  a number of fantastic events for the Scouts this year!
                    </p>
                    <p className='scoutmaster-text'>
                        Yours in Scouting,
                    </p>
                    <p className='scoutmaster-signature'>
                        Peter Hamilton
                    </p>
                    <p className='scoutmaster-text'>
                        Scoutmaster- Troop 27
                    </p>
                    <i className='scoutmaster-text'>
                        Eagle Scout & involved in Scouting since 1974
                    </i>
                </div>
            </div>
        </>
    );
};

export default Scoutmaster;