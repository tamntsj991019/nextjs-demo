"use client";
import React, { useEffect } from "react";
import { useUserStore } from "@reduxjs-toolkit/useRedux";
import { fetchAnime } from "@app/action";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
const Demo = () => {
	const { userInfo, actUpdateUserInfo } = useUserStore();

	useEffect(() => {
		if (userInfo) {
			console.log("alo - old: ", userInfo);
		} else {
			console.log("alo - new");
			fetchAnime(1).then((res) => {
				actUpdateUserInfo(res);
				console.log({ res });
			});
		}
	}, []);
	return (
		<div>
			{JSON.stringify(userInfo || "")}
			<Link
				href={{
					pathname: "/alphabet",
					query: { name: "Someone" },
				}}
			>
				Demo
			</Link>
		</div>
	);
};
export default Demo;
