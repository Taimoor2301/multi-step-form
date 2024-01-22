import { useEffect, useState } from "react";
import { checkmark } from "../../assets/images";
import { useDataContext } from "../../context/Context";

const Addon = ({ addon }) => {
	const { name, det, priceMM, priceYY } = addon;
	const { data, setData } = useDataContext();
	const { planType } = data;

	const [isIncluded, setIsIncluded] = useState(false);

	const el = data.addons.find((el) => el.name === name);

	useEffect(() => {
		if (el) {
			setIsIncluded(true);
		} else {
			setIsIncluded(false);
		}
	}, [el]);

	function handleClick() {
		if (!isIncluded) {
			setData((prev) => ({
				...prev,
				addons: [...data.addons, { name, priceMM, priceYY }],
				addonPrice: planType === "monthly" ? data.addonPrice + priceMM : data.addonPrice + priceYY,
			}));
		} else {
			setData((prev) => ({
				...prev,
				addons: data.addons.filter((el) => el.name !== name),
				addonPrice: planType === "monthly" ? data.addonPrice - priceMM : data.addonPrice - priceYY,
			}));
		}
	}

	return (
		<div
			onClick={() => handleClick()}
			key={name}
			className={`cursor-pointer flex justify-between items-center px-4 py-3 rounded-md border ${
				isIncluded ? "border-c2 bg-c2 bg-opacity-5" : "border-n1"
			} hover:border-c2`}>
			<div className='flex gap-6 items-center'>
				<div
					className={`${
						isIncluded ? "bg-c2 border-c2" : "bg-transparent border-n1"
					} border rounded aspect-square h-6 grid place-content-center hover:border-c2`}>
					{isIncluded && <img src={checkmark} alt='' />}
				</div>

				<div className='flex flex-col'>
					<span className='font-ubuntuB text-c1 text-lg'>{name}</span>
					<span className='font-ubuntuR text-n1 text-sm'>{det}</span>
				</div>
			</div>

			<span className='font-ubuntuM text-c2'>
				+${planType === "monthly" ? priceMM : priceYY}/{planType === "monthly" ? "mo" : "year"}
			</span>
		</div>
	);
};

export default Addon;
