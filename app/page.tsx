import { faMortarPestle, faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
	return (
		<main className="p-24">
			<div className="mb-4 text-lg">Interview Spice</div>
			<div>
				<div className="hover:font-bold mb-2">
					<Link href="/spices">
						Spices{" "}
						<FontAwesomeIcon icon={faPepperHot} spin className="text-red-100" />
						<FontAwesomeIcon icon={faPepperHot} spin className="text-red-200" />
						<FontAwesomeIcon icon={faPepperHot} spin className="text-red-300" />
						<FontAwesomeIcon icon={faPepperHot} spin className="text-red-400" />
					</Link>
				</div>
				<div className="hover:font-bold mb-2">
					<Link href="/blends">
						Blends <FontAwesomeIcon icon={faMortarPestle} shake />
						<FontAwesomeIcon
							icon={faMortarPestle}
							shake
							className="text-stone-300"
						/>
						<FontAwesomeIcon
							icon={faMortarPestle}
							shake
							className="text-stone-400"
						/>
						<FontAwesomeIcon
							icon={faMortarPestle}
							shake
							className="text-stone-500"
						/>
					</Link>
				</div>
			</div>
		</main>
	);
}
