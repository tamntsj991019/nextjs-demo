import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const COMMON_REDUCER = "CommonReducer";

// Create slide
const slice = createSlice({
	name: COMMON_REDUCER,

	initialState: {
		isLoadingFullPage: false,
	},

	reducers: {
		actUpdateLoadingFullPage: (state, action) => {
			state.isLoadingFullPage = action.payload;
		},
	},
});

// store
export const useCommonStore = () => {
	const { isLoadingFullPage } = useSelector((state) => state[COMMON_REDUCER]);

	const dispatch = useDispatch();
	const { actOpenLoadingFullPage } = slice.actions;

	return {
		// State
		isLoadingFullPage,
		// Action
		actOpenLoadingFullPage: (data) => {
			dispatch(actOpenLoadingFullPage(data));
		},
	};
};

export default slice.reducer;
