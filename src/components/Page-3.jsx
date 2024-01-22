import Header from "./utils/Header";
import Layout from "./utils/Layout";
import Buttons from "./utils/Buttons";
import Addon from "./utils/Addon";
import { useDataContext } from "../context/Context";
import { useEffect } from "react";

const PageThree = () => {
	const { setActivePage } = useDataContext();

	useEffect(() => {
		setActivePage(3);
	}, []);
	return (
		<div className='flex flex-col justify-between h-full max-w-lg'>
			<div className='flex flex-col gap-10'>
				<Header title='Pick add-ons' sub='Add-ons help enhance your gaming experience.' />

				<div className='flex flex-col gap-3'>
					{addonsList.map((el) => (
						<Addon key={el.name} addon={el} />
					))}
				</div>
			</div>

			<Buttons nextLink='/4' prevLink='/2' />
		</div>
	);
};

export default PageThree;

const addonsList = [
	{ name: "Online Service", det: "Access to multiplayer games", priceMM: 1, priceYY: 10 },
	{ name: "Large storage", det: "Extra 1TB of cloud storage", priceMM: 2, priceYY: 20 },
	{ name: "Customizable profile", det: "Customize theme on your profile", priceMM: 2, priceYY: 20 },
];
