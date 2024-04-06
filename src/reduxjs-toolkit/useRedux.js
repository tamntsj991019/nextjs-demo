// import { reducer as formReducer } from "redux-form";
import { configureStore } from "@reduxjs/toolkit";
import commonStore, {
	COMMON_REDUCER,
	useCommonStore,
} from "./store/commonStore";
import errorStore, { ERROR_REDUCER, useErrorStore } from "./store/errorStore";
import userStore, { USER_REDUCER, useUserStore } from "./store/userStore";

const storeConfig = configureStore({
	reducer: {
		// form: formReducer,
		[COMMON_REDUCER]: commonStore,
		[ERROR_REDUCER]: errorStore,
		[USER_REDUCER]: userStore,
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(/* custom middleware if any */),
});

export {
	// config
	storeConfig,
	// store
	useCommonStore,
	useErrorStore,
	useUserStore,
};
