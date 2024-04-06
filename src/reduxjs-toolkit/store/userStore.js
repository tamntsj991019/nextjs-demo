import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const USER_REDUCER = "UserReducer";

// Create slide
const slice = createSlice({
	name: USER_REDUCER,

	initialState: {
		userInfo: null,
	},

	reducers: {
		actUpdateUserInfo: (state, action) => {
			console.log({ val: action.payload });
			state.userInfo = action.payload;
			console.log({ userInfo: state.userInfo });
		},
		actClearAll: (state) => {
			state.userInfo = null;
		},
	},
});
// store
export const useUserStore = () => {
	const { userInfo } = useSelector((state) => state[USER_REDUCER]);

	const dispatch = useDispatch();
	const { actUpdateUserInfo, actClearAll } = slice.actions;

	return {
		// State
		userInfo,
		// Action
		actUpdateUserInfo: (data) => {
			dispatch(actUpdateUserInfo(data));
		},
		actClearAll: () => {
			dispatch(actClearAll());
		},
	};
};

export default slice.reducer;
