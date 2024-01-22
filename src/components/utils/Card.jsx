import { useDataContext } from "../../context/Context";
const Card = ({ icon, name, priceMM, priceYY }) => {
	const { data, setData } = useDataContext();
	const { planName, planType } = data;

	return (
		<div
			onClick={() => setData((prev) => ({ ...prev, planName: name, planPrice: { priceMM, priceYY } }))}
			className={`flex md:flex-col md:justify-between items-center md:items-start gap-5 md:gap-12  w-full cursor-pointer select-none p-5 border border-n1 rounded-lg hover:border-c2 hover:bg-c2 hover:bg-opacity-5 ${
				planName === name ? "border-c2 bg-c2 bg-opacity-5" : ""
			}  `}>
			<div>
				<img src={icon} alt='icon' />
			</div>

			<div>
				<h1 className='text-c1 font-ubuntuM text-lg'>{name}</h1>
				<h2 className='text-n1'>
					${planType === "monthly" ? priceMM : priceYY}/{planType === "monthly" ? "mo" : "yr"}
				</h2>
				{planType === "yearly" && <h2 className='text-c1 font-ubuntuM'>2 months free</h2>}
			</div>
		</div>
	);
};

export default Card;
