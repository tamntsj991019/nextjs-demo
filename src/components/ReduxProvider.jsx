"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { storeConfig } from "@reduxjs-toolkit/useRedux";

export default function ReduxProvider({ children }) {
	// const storeRef = useRef(null);
	// if (!storeRef.current) {
	// 	// Create the store instance the first time this renders
	// 	storeRef.current = storeConfig();
	// }
	return <Provider store={storeConfig}>{children}</Provider>;
}
