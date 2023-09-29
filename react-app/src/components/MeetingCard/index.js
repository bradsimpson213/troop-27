import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./MeetingCard.css"
import { FiTrash, FiEdit } from 'react-icons/fi';

const MeetingCard = ({ meeting }) => {
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div className="meeting-card-container">
            <div className="meeting-card-upper">
                <div className="meeting-card-titlegroup">
                    <span className="meeting-card-title">{ meeting.name }</span>
                    { sessionUser.admin && 
                        <div className="icons-container">
                            <FiEdit /> 
                            <FiTrash/> 
                        </div>
                    }
                </div>
                <span>{ meeting.date } : { meeting.start_time } - { meeting.end_time }</span>
            </div>
            <div className="meeting-card-lower">
                <img className="meeting-card-location" src={ meeting.location.locationImage } />
                <div className="location-container">
                    <p>{ meeting.location.name }</p>
                    <p>{ meeting.location.streetAddress }</p>
                    <p>{ meeting.location. city}, { meeting.location.state }  { meeting.location.zipCcode }</p>
                </div>
                <div>
                    <p>{ meeting.details }</p>
                </div>
                <div>
                    <p>{ meeting.requirements }</p>
                </div>
            </div>
        </div>
)};

export default MeetingCard;