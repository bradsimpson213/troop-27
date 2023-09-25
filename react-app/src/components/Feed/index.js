import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from '@mui/material/Button';

import './Feed.css';



const Feed = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);


    return (
        <>
            <h1>Feed will be here!</h1>
        </>
    )

};

export default Feed; 