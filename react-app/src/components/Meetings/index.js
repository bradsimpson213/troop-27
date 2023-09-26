import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeetings } from "../../store/meeting";
import './Meetings.css';



const Meetings = () => {
    const dispatch = useDispatch();
    const allMeetings = useSelector((state) => state.meetings);
    // Controlled form inputs
    const [meetingName, setMeetingName] = useState("");
    const [meetingTime, setMeetingTime] = useState("");
    const [meetingDate, setMeetingDate] = useState("");
    const [meetingLocation, setMeetingLocation] = useState("");
    const [meetingDetails, setMeetingDetails] = useState("");
    const [meetingRequirements, setMeetingRequirements] = useState("");
    const [errors, setErrors] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = await dispatch(login(email, password));
        // if (data) {
        //   setErrors(data);
        // } else {
        //   history.push("/feed")
        // }
      };

    return (
        <>
            <div>
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
                        Meeting Time:
                    </label >
                    <input
                        type="date"
                        label="date"
                        value={meetingDate}
                        onChange={(e) => setMeetingDate(e.target.value)}
                        required
                        className="meeting-input"
                    />
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