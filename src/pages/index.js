import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		localStorage.setItem("HOME", new Date().toISOString());
	}, []);
	return <div>Home</div>;
};

export default Home;
