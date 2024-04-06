import { useUserStore } from "@reduxjs-toolkit/useRedux";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Alphabet = () => {
	const params = useParams();
	const router = useRouter();
	console.log({ params, router });
	const { userInfo } = useUserStore();
	useEffect(() => {
		console.log("alo2");
	}, [userInfo]);
	return (
		<div>
			Alphabet
			<Link href="/">Home</Link>
			{JSON.stringify(userInfo || "")}
		</div>
	);
};

export default Alphabet;
