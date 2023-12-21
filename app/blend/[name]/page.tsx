import { fetchBlend, fetchSpiceById } from "@/data/api";
import Image from "next/image";
import "../../spice/[name]/spice.css";
import Header from "@/app/components/Header";

const Blend = async ({ params }: { params: any }) => {
	const blend = await fetchBlend(decodeURIComponent(params.name));

	if (!blend) {
		return <div>No blend found</div>;
	}

	const spices = await Promise.all(
		blend.spices.map(async (spiceId) => {
			const spice = await fetchSpiceById(spiceId);

			return spice;
		})
	);

	return (
		<>
			<div className="backButton">
				<Header />
			</div>
			<div className="wrapper">
				<div className="card">
					<div className="spiceInfo">
						<div className="spiceSeparator">
							<div className="spiceDetail">Blend Detail</div>
							<div>Name: {blend.name}</div>
							<div>Blends: {blend.blends}</div>
							<div className="max-w-sm">
								Spices:{" "}
								{spices
									.map((spice) => (spice ? spice.name : "Unknown"))
									.join(", ")}
							</div>
							<div>Description: {blend.description}</div>
						</div>
						<div className="spiceImage">
							<Image
								src={blend.image}
								alt={blend.name}
								height={400}
								width={400}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blend;
