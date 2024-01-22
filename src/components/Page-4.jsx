import Layout from "./utils/Layout";
import Header from "./utils/Header";
import Buttons from "./utils/Buttons";
import { useDataContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PageFour = () => {
	const { data, setActivePage } = useDataContext();

	useEffect(() => {
		setActivePage(4);
	}, []);

	let total = 0;

	if (data.planType === "monthly") {
		total = data.addons.reduce((a, b) => a + b.priceMM, 0) + data.planPrice.priceMM;
	} else {
		total = data.addons.reduce((a, b) => a + b.priceYY, 0) + data.planPrice.priceYY;
	}

	return (
		<div className='flex flex-col justify-between h-full max-w-xl'>
			<div className='flex flex-col w-full gap-10'>
				<Header title='Finishing up' sub='Double-check everything looks OK before confirming.' />
				<section className='bg-n3 rounded-md p-5'>
					<div className='pb-4 border-b border-b-n1 flex justify-between items-center w-full'>
						<div className='flex flex-col'>
							<span className='text-lg font-ubuntuB text-c1'>
								{data.planName}({data.planType})
							</span>
							<Link to='/2' className='text-sm text-n1 underline font-ubuntuM hover:text-c2 transition-all'>
								Change
							</Link>
						</div>
						<div className='font-ubuntuB text-c1 text-lg'>
							${data.planType === "monthly" ? data.planPrice.priceMM : data.planPrice.priceYY}/{data.planType === "monthly" ? "mo" : "year"}
						</div>
					</div>

					<div className='flex flex-col w-full gap-3 pt-5 pb-3'>
						{data.addons.map((el) => (
							<div key={el.name} className='flex w-full items-center justify-between'>
								<span className='text-n1 font-ubuntuM'>{el.name}</span>
								<span className='text-c1 font-ubuntuR'>
									+${data.planType === "monthly" ? el.priceMM : el.priceYY}/{data.planType === "monthly" ? "mo" : "year"}
								</span>
							</div>
						))}
					</div>
				</section>

				<div className='flex justify-between w-full items-center'>
					<span className='text-n1 font-ubuntuM'>Total(per{data.planType === "monthly" ? "month" : "year"})</span>
					<span className='font-ubuntuB text-xl text-c2'>
						+${total}/{data.planType === "monthly" ? "mo" : "year"}
					</span>
				</div>
			</div>

			<Buttons nextLink='/thankyou' prevLink='/3' text='Confirm' />
		</div>
	);
};

export default PageFour;
