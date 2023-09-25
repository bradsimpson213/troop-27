import * as React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
// Style import
import "./Landing.css"
import campPic from "./campsite.png"


const Landing = () => {
    let history = useHistory()

    return (
        <div className="landing-wrapper">    
            <div className="landing-text-container">
                <div className="landing-text-sub-container">
                    <p className="landing-title"> BSA Troop 27 </p>
                    <p className="landing-sub-title"> Glen Rock, NJ </p>
                </div>
                <div className="landing-text-container">
                    <p className="landing-quote"> "Scouting is all about learning stuff, and burning stuff..." </p>
                    <p className="landing-author">  - A. Mazuti </p>    
                </div>
                <div className='button-div'>
                    <Button 
                        variant="outlined" 
                        size="large"
                        sx={{
                            color: "whitesmoke",
                            border: 3,
                            borderColor: "whitesmoke",
                            borderRadius: 2,
                            margin: 2,
                            bgcolor: "darkgreen",
                        '&:hover': {
                                bgcolor: "orange",
                            }
                        }}
                        onClick={ () => history.push("/login")} 
                    >
                        Log On
                    </Button>
                    <Button 
                        variant="outlined"
                        size="large"
                        sx={{
                            color: "whitesmoke",
                            border: 3,
                            borderColor: "whitesmoke",
                            borderRadius: 2,
                            margin: 2,
                            bgcolor: "darkgreen",
                            '&:hover': {
                                bgcolor: "orange",
                            }
                        }}
                        onClick={ () => history.push("/signup")}  
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
            <img 
                src={ campPic }
                className="landing-graphic"
                alt="camping logo"
            />
        </div>
    );
}

export default Landing;