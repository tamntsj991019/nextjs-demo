const App = ({ Component, pageProps }) => {
	const Menus = [
		{ label: "", href: "", as: "" },
		{ label: "", href: "", as: "" },
	];
	return (
		<div>
			a
			<Component {...pageProps} />
		</div>
	);
};
export default App;
