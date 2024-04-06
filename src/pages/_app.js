import ReduxProvider from "@components/ReduxProvider";
import React from "react";

const App = ({ Component, pageProps }) => {
	return (
		<ReduxProvider>
			a
			<Component {...pageProps} />
		</ReduxProvider>
	);
};
export default App;
