import Card from "./utils/Card";
import Header from "./utils/Header";
import Layout from "./utils/Layout";
import { arcad, pro, advanced } from "../assets/images";
import Switch from "./utils/Switch";
import Buttons from "./utils/Buttons";
import { useEffect } from "react";
import { useDataContext } from "../context/Context";

const PageTwo = () => {
	const { data, setActivePage } = useDataContext();
	const { planType } = data;

	useEffect(() => {
		setActivePage(2);
	}, []);
	return (
		<div className=' flex flex-col justify-between h-full max-w-lg'>
			<div className='flex flex-col gap-8 w-full'>
				<Header title={"Select your plan"} sub={"You have the option of monthly or yearly billing."} />

				<section className='flex flex-col md:flex-row gap-3 w-full max-w-lg'>
					<Card icon={arcad} name={"Arcade"} priceMM={9} priceYY={90} />
					<Card icon={advanced} name={"Adavnced"} priceMM={12} priceYY={120} />
					<Card icon={pro} name={"Pro"} priceMM={14} priceYY={150} />
				</section>

				<section className='bg-c2 bg-opacity-5 rounded-lg font-ubuntuM text-lg flex justify-center items-center gap-6 py-4 max-w-lg'>
					<span className={`${planType === "yearly" && "text-n2"}`}>Monthly</span>
					<Switch />
					<span className={`${planType === "monthly" && "text-n2"}`}>Yearly</span>
				</section>
			</div>

			<Buttons nextLink='/3' prevLink='/' />
		</div>
	);
};

export default PageTwo;
