import spices from "./spices";
import blends from "./blends";

export interface Spice {
	id: number;
	name: string;
	price?: string;
	heat: number;
	color: string;
}

export interface Blend {
	id: number;
	name: string;
	blends: number[];
	spices: number[];
	description: string;
	image: string;
}

export interface Blend {
	name: string;
}

export const fetchSpices = async (): Promise<Spice[]> => {
	const prom = new Promise<Spice[]>((resolveOuter) => {
		setTimeout(() => {
			resolveOuter(spices);
		}, 2000);
	});

	return prom;
};

export const fetchBlends = async (): Promise<Blend[]> => {
	const prom = new Promise<Blend[]>((resolveOuter) => {
		setTimeout(() => {
			resolveOuter(blends);
		}, 2000);
	});

	return prom;
};

export const fetchSpice = async (name: string): Promise<Spice | undefined> => {
	const prom = new Promise<Spice | undefined>((resolveOuter) => {
		setTimeout(() => {
			resolveOuter(spices.find((spice) => spice.name === name));
		}, 2000);
	});

	return prom;
};

export const fetchSpiceById = async (
	id: number
): Promise<Spice | undefined> => {
	const prom = new Promise<Spice | undefined>((resolveOuter) => {
		setTimeout(() => {
			resolveOuter(spices.find((spice) => spice.id === id));
		}, 2000);
	});

	return prom;
};

export const fetchBlend = async (name: string): Promise<Blend | undefined> => {
	const prom = new Promise<Blend | undefined>((resolveOuter) => {
		setTimeout(() => {
			resolveOuter(blends.find((blend) => blend.name === name));
		}, 2000);
	});

	return prom;
};
