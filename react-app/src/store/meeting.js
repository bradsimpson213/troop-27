import { normalizeObj } from './helpers';
// constants
const SET_MEETINGS = "session/SET_MEETINGS";


const setMeetings = () => ({
	type: SET_MEETINGS,
});

// const addMeeting = (meeting) => ({
// 	type: REMOVE_USER,
//     payload: meeting
// });


const initialState = [null];


export const getAllMeetings = () => async (dispatch) => {
	const response = await fetch("/api/meetings/all", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const { meetings } = await response.json();
		// if (data.errors) {
		// 	return;
		// }

		dispatch(setMeetings(meetings));
	}
};



export default function reducer(state = initialState, action) {
	let newState;
    switch (action.type) {
		case SET_MEETINGS:
            newState = {...state}
            newState.meetings = normalizeObj(action.payload)
			return newState
		default:
			return state;
	}
}