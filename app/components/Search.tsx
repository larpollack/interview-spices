"use client";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { Spice, Blend } from "@/data/api";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchProps {
	spices?: Spice[];
	blends?: Blend[];
	type: "spice" | "blend";
}

const Search = ({ spices, blends, type }: SearchProps) => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const filteredItems =
		type === "spice"
			? spices?.filter((spice) =>
					spice.name.toLowerCase().includes(inputValue.toLowerCase())
			  )
			: blends?.filter((blend) =>
					blend.name.toLowerCase().includes(inputValue.toLowerCase())
			  );

	return (
		<>
			<div>
				<div className="relative mb-4">
					<input
						type="text"
						placeholder={`Search ${type}s`}
						value={inputValue}
						onChange={handleChange}
						className="text-stone-800 pl-2 rounded-lg relative"
					/>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="absolute text-gray-700/25 left-[10rem] top-[0.25rem]"
					/>
				</div>

				{filteredItems && (
					<div className="grid grid-cols-3 gap-2">
						{filteredItems.map((item) => (
							<Link key={item.id} href={`/${type}/${item.name}`}>
								<ul>
									<li className="hover:font-bold">{item.name}</li>
								</ul>
							</Link>
						))}
					</div>
				)}
			</div>
			<hr className="border-stone-400 mt-4" />
		</>
	);
};

export default Search;
