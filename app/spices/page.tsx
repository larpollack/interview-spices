import { fetchSpices } from "@/data/api";
import Link from "@/node_modules/next/link";
import Search from "../components/Search";
import Header from "../components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Spice List",
	description: "A list of all the spices",
};

const Spices = async () => {
	const spices = await fetchSpices();

	console.log("render");
	return (
		<>
			<div className="p-24">
				<Header />
				<div className="text-lg mb-4">Spice List</div>
				<Search spices={spices} type="spice" />

				<div className="text-lg my-4 hover:font-bold">
					<Link href="/blends">Related Blends</Link>
				</div>
			</div>
		</>
	);
};

export default Spices;
