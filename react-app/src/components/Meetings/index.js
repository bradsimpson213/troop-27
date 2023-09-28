import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createMeeting, getAllMeetings } from "../../store/meetings";
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
        const [aYear, aMonth] = a.split(" - ")
        const [bYear, bMonth] = b.split(" - ")

        if (new Date(`${aYear}-${monthObj[aMonth]}`) < new Date(`${bYear}-${monthObj[bMonth]}`)) return -1;
        if (new Date(`${aYear}-${monthObj[aMonth]}`) > new Date(`${bYear}-${monthObj[bMonth]}`)) return 1;
        if (new Date(`${aYear}-${monthObj[aMonth]}`) === new Date(`${bYear}-${monthObj[bMonth]}`)) return 0;
    };

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

    useEffect(() => {
        dispatch(getAllMeetings())

    }, [dispatch]);


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
                        { locations?.map( (location) => (
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
                <div className="meetings-container">
                    <h2>Meetings</h2>
                        {allMeetings && Object.keys(allMeetings).sort(compare).map( (meeting_key) => (
                            <div>
                                <p className="meeting-heading" key={meeting_key}>{ meeting_key }</p>
                                    { allMeetings[meeting_key]?.map( (meeting) => (
                                        <div>{meeting.date} : { meeting.name } - { meeting.location.name } </div>
                                    ))}
                            </div>
                        ))}
                </div>
            </div>


        </>
    )

};

export default Meetings;