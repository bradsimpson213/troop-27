import React, { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle"
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { createMeeting, getAllMeetings } from "../../store/meetings";
import Button from '@mui/material/Button';
import MeetingCard from "../MeetingCard";
import './Meetings.css';



const Meetings = () => {
    const dispatch = useDispatch();
    // let history;
    const allMeetings = useSelector((state) => state.meetings);
    const [locations, setLocations] = useState([]);
    const [toggleCollapse, setCollapseToggle] = useToggle(false)
    // Controlled form inputs
    const [meetingName, setMeetingName, resetMeetingName] = useInput("");
    const [meetingDate, setMeetingDate, resetMeetingDate] = useInput("");
    const [meetingStartTime, setMeetingStartTime, resetMeetingStartTime] = useInput("");
    const [meetingEndTime, setMeetingEndTime, resetMeetingEndTime] = useInput("");
    const [meetingLocation, setMeetingLocation, resetMeetingLocation] = useInput(1);
    const [meetingDetails, setMeetingDetails, resetMeetingDetails] = useInput("");
    const [meetingRequirements, setMeetingRequirements, resetMeetingRequirements] = useInput("");
    const [errors, setErrors] = useState([]);
   

    const compare = (a, b) => {
        const monthObj = {
            January: '01',
            February: '02',
            March: '03',
            April: '04',
            May: '05',
            June: '06',
            July: '07',
            August: '08',
            September: '09',
            October: '10',
            November: '11',
            December: '12',
        }
        const [aYear, aMonth] = a.split(" - ");
        const [bYear, bMonth] = b.split(" - ");

        if (new Date(`${aYear}-${monthObj[aMonth]}`) < new Date(`${bYear}-${monthObj[bMonth]}`)) return -1;
        if (new Date(`${aYear}-${monthObj[aMonth]}`) > new Date(`${bYear}-${monthObj[bMonth]}`)) return 1;
        if (new Date(`${aYear}-${monthObj[aMonth]}`) === new Date(`${bYear}-${monthObj[bMonth]}`)) return 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newMeeting = {
            "name": meetingName,
            "date": meetingDate,
            "start_time": meetingStartTime,
            "end_time": meetingEndTime,
            "location_id": meetingLocation,
            "details": meetingDetails,
            "requirements": meetingRequirements
        };

        const data = await dispatch(createMeeting(newMeeting));
        if (data) {
          setErrors(data);
        } else {
            resetMeetingName();
            resetMeetingDate();
            resetMeetingStartTime();
            resetMeetingEndTime();
            resetMeetingLocation();
            resetMeetingDetails();
            resetMeetingRequirements();
            setErrors([]);
            setCollapseToggle();
        }
      };

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/locations/all")
            if(response.ok){
                const { locations } = await response.json();
                setLocations(locations);
            } else {
                window.alert("There was an error getting locations!");
            }
        })()
    }, []);

    useEffect(() => {
        dispatch(getAllMeetings());

    }, [dispatch]);


    return (
        <div className="meeting-form-container">
            { toggleCollapse && 
                <div> 
                    <h3>Create A New Meeting</h3>
                    <form 
                        onSubmit={handleSubmit}
                        className="meeting-form"  
                    >
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                        <label className="meeting-form-label" name="name">
                            Meeting Name:
                        </label >
                        <input
                            type="text"
                            label="name"
                            value={ meetingName }
                            onChange={ setMeetingName }
                            required
                            className="meeting-input"
                            placeholder="Weekly troop meeting"
                        />
                        <label className="meeting-form-label" name="date">
                            Meeting Date:
                        </label >
                        <input
                            type="date"
                            label="date"
                            value={ meetingDate }
                            onChange={ setMeetingDate }
                            required
                            className="meeting-input"
                        />
                        <div>
                            <label className="meeting-form-label" name="start-time">
                                Start Time:
                            </label >
                            <input
                                type="time"
                                label="start-time"
                                value={ meetingStartTime }
                                onChange={ setMeetingStartTime }
                                required
                                className="meeting-input"
                            />
                            <label className="meeting-form-label" name="end-time">
                                End Time:
                            </label >
                            <input
                                type="time"
                                label="end-time"
                                value={ meetingEndTime }
                                onChange={ setMeetingEndTime }
                                required
                                className="meeting-input"
                            />
                        </div>
                        <label className="meeting-form-label" name="location">
                            Location:
                        </label >
                        <select
                            type="select"
                            label="location"
                            value={ meetingLocation }
                            onChange={ setMeetingLocation }
                            required
                            className="meeting-input"
                        >
                            { locations?.map( (location) => (
                                <option 
                                    key={ location.id } 
                                    value={ location.id }
                                >
                                    { location.name }
                                </option>        
                            ))}
                        </select>
                        <label className="meeting-form-label" name="details">
                            Meeting Details:
                        </label >
                        <textarea
                            type="text"
                            label="details"
                            value={ meetingDetails }
                            onChange={ setMeetingDetails }
                            className="meeting-input"
                            placeholder="We will cover a merit badge"
                        />
                        <label className="meeting-form-label" name="requirements">
                            Meeting Requirements:
                        </label >
                        <textarea
                            type="text"
                            label="requirements"
                            value={ meetingRequirements }
                            onChange={ setMeetingRequirements }
                            className="meeting-input"
                            placeholder="We will cover a merit badge"
                        />
                        <button
                            type="submit"
                        >
                            Create Meeting
                        </button>
                    </form>
                    </div>
                    }
                <div className="meetings-container">
                    <div className="meetings-heading">
                        <h2>Meetings</h2>
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
                        onClick={ setCollapseToggle }  
                        >
                            Add Meeting  
                        </Button> 
                    </div>
                        { allMeetings && Object.keys(allMeetings).sort(compare).map( (meeting_key) => (
                            <div className="month-container" >
                                <p className="meeting-month-heading" >{ meeting_key }</p>
                                    { allMeetings[meeting_key]?.map( (meeting) => (
                                        <MeetingCard meeting={ meeting } key={ meeting?.id } />
                                    ))}
                            </div>
                        ))};
                </div>       
        </div>
    )

};

export default Meetings;