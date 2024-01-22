import { useDataContext } from "../../context/Context";

const Switch = () => {
	const { data, setData } = useDataContext();
	const { planType } = data;

	function handleClick() {
		if (planType === "monthly") {
			setData((prev) => ({ ...prev, planType: "yearly" }));
		} else {
			setData((prev) => ({ ...prev, planType: "monthly" }));
		}
	}

	return (
		<div className='relative'>
			<label htmlFor='plan'>
				<div className='bg-c1 w-11 h-6 relative  rounded-xl'>
					<div className={`absolute top-1 ${planType === "monthly" ? "left-1" : "right-1"}  rounded-full aspect-square h-4 bg-white`}></div>
				</div>
			</label>
			<input type='checkbox' onChange={() => handleClick()} name='plan' id='plan' className='absolute invisible' />
		</div>
	);
};

export default Switch;
