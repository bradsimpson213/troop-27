import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createMeeting } from "../../store/meeting";
import './Meetings.css';



const Meetings = () => {
    const dispatch = useDispatch();
    let history;
    const allMeetings = useSelector((state) => state.meetings);
    const [locations, setLocations] = useState([])
    // Controlled form inputs
    const [meetingName, setMeetingName] = useState("");
    const [meetingDate, setMeetingDate] = useState("");
    const [meetingStartTime, setMeetingStartTime] = useState("");
    const [meetingEndTime, setMeetingEndTime] = useState("");
    const [meetingLocation, setMeetingLocation] = useState(1);
    const [meetingDetails, setMeetingDetails] = useState("");
    const [meetingRequirements, setMeetingRequirements] = useState("");
    const [errors, setErrors] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("MEETING LOC", meetingLocation)

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
        } 
      };

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/locations/all")
            if(response.ok){
                const { locations } = await response.json();
                setLocations(locations);
            } else {
                console.log("There was an error getting locations!");
            }
        })()
    }, []);

    return (
        <>
            <div className="meeting-form-container">
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
                        value={meetingName}
                        onChange={(e) => setMeetingName(e.target.value)}
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
                        value={meetingDate}
                        onChange={(e) => setMeetingDate(e.target.value)}
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
                            value={meetingStartTime}
                            onChange={(e) => setMeetingStartTime(e.target.value)}
                            required
                            className="meeting-input"
                        />
                        <label className="meeting-form-label" name="end-time">
                            End Time:
                        </label >
                        <input
                            type="time"
                            label="end-time"
                            value={meetingEndTime}
                            onChange={(e) => setMeetingEndTime(e.target.value)}
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
                        onChange={(e) => setMeetingLocation(e.target.value)}
                        required
                        className="meeting-input"
                    >
                        {locations?.map( (location) => (
                            <option 
                                key={location.id} 
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
                        value={meetingDetails}
                        onChange={(e) => setMeetingDetails(e.target.value)}
                        required
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
                        onChange={(e) => setMeetingRequirements(e.target.value)}
                        required
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


            <h1>Meetings will be here!!!</h1>
            {allMeetings?.map((meeting) => (
            <div key={meeting.id} >
               { meeting.name }
            </div>
            ))}
        </>
    )

};

export default Meetings;