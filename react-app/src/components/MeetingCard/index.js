import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./MeetingCard.css"
import { FiTrash, FiEdit } from 'react-icons/fi';

const MeetingCard = ({ meeting }) => {
    const sessionUser = useSelector((state) => state.session.user);

    // helper to convert military time to standard
    const timeHelper = (time) => {
        let [hours, minutes, seconds] = time.split(":");
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;
        const finalTime = `${hours}:${minutes} ${amOrPm}`;
        return finalTime;
    };

    const startTime = timeHelper(meeting.start_time)
    const endTime = timeHelper(meeting.end_time)

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
                <span>{ meeting.date } : { startTime } - { endTime }</span>
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