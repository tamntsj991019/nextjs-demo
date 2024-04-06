import { createSlice } from "@reduxjs/toolkit";
import { ETypeError } from "@utils/const";
import { useDispatch, useSelector } from "react-redux";

export const ERROR_REDUCER = "ErrorReducer";

// Create slide
const slice = createSlice({
	name: ERROR_REDUCER,

	initialState: {
		status: false,
		eTypeError: ETypeError.None,
		msg: null,
	},

	reducers: {
		actSetError: (state, action) => {
			state.status = true;
			state.eTypeError = action.payload.eTypeError;
			state.msg = action.payload.msg;
		},
		actClearAll: (state) => {
			state.status = false;
			state.eTypeError = ETypeError.None;
			state.msg = null;
		},
	},
});

// store
export const useErrorStore = () => {
	const { status, eTypeError, msg } = useSelector(
		(state) => state[ERROR_REDUCER],
	);

	const dispatch = useDispatch();
	const { actSetError, actClearAll } = slice.actions;

	return {
		// State
		status,
		eTypeError,
		msg,
		// Action
		actSetError: (data) => {
			dispatch(actSetError(data));
		},
		actClearAll: () => {
			dispatch(actClearAll());
		},
	};
};

export default slice.reducer;
