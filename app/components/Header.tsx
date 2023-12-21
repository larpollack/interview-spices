"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const Header = () => {
	const router = useRouter();
	return (
		<header>
			<button onClick={() => router.back()}>
				<div className="mb-6">
					<FontAwesomeIcon icon={faArrowLeft} size="lg" />
				</div>
			</button>
		</header>
	);
};

export default Header;
