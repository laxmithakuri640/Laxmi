// formSlice.js

// Action Types
const UPDATE_FORM = "UPDATE_FORM";

// Action Creator
export const updateForm = (payload) => ({
	type: UPDATE_FORM,
	payload,
});

// Reducer
const initialState = {
	name: "",
	email: "",
	address: "",
	city: "",
};

export default function formReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_FORM:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}