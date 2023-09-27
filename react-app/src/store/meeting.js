import { normalizeObj } from './helpers';
// constants
const SET_MEETINGS = "meeting/SET_MEETINGS";
const ADD_MEETING = "meeting/ADD_MEETING"

const setMeetings = () => ({
	type: SET_MEETINGS,
});

const addMeeting = (meeting) => ({
	type: ADD_MEETING,
    payload: meeting
});


const initialState = [null];


export const getAllMeetings = () => async (dispatch) => {
	const response = await fetch("/api/meetings/all", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const { meetings } = await response.json();
		console.log("MEETINGS FROM SERVER", meetings)
		dispatch(setMeetings(meetings));
	}
};


export const createMeeting = (meeting) => async (dispatch) => {
	const response = await fetch("/api/meetings/new", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(meeting)
		})

	if (response.ok) {
		const { newMeeting } = await response.json();
		console.log(newMeeting)
		dispatch(addMeeting(newMeeting));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export default function reducer(state = initialState, action) {
	let newState;
    switch (action.type) {
		case SET_MEETINGS:
            newState = {...state}
            newState.meetings = normalizeObj(action.payload)
			return newState
		case ADD_MEETING:
			newState = {...state}
			newState.meetings[action.meeting.id] = action.meeting
			return newState
		default:
			return state;
	}
}