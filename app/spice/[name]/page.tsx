import { fetchSpice } from "@/data/api";
import Image from "next/image";
import "./spice.css";
import Header from "@/app/components/Header";

const Spices = async ({ params }: { params: any }) => {
	const spice = await fetchSpice(decodeURIComponent(params.name));

	if (!spice) {
		return <div>No spice found</div>;
	}
	return (
		<>
			<div className="backButton">
				<Header />
			</div>
			<div className="wrapper">
				<div className="card">
					<div className="spiceInfo">
						<div className="spiceSeparator">
							<div className="spiceDetail">Spice Detail</div>
							<div>Name: {spice.name}</div>
							<div>Price: {spice.price}</div>
							<div>Heat: {spice.heat}</div>
							<div>Color: {spice.color}</div>
						</div>
						<div className="spiceImage">
							<Image
								src="/cartoon-spices.png"
								height={500}
								width={400}
								alt={spice.name}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Spices;
