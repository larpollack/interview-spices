import { fetchBlends } from "@/data/api";
import Link from "next/link";
import Search from "../components/Search";
import Header from "../components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blend List",
	description: "A list of all the blends",
};

const Spices = async () => {
	const blends = await fetchBlends();
	console.log("render");
	return (
		<>
			<div className="p-24">
				<Header />
				<div className="text-lg mb-4">Blend List</div>
				<Search blends={blends} type="blend" />
				<div className="text-lg my-4 hover:font-bold">
					<Link href="/spices">Related Spices</Link>
				</div>
			</div>
		</>
	);
};

export default Spices;
