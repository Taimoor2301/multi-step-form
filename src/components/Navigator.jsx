import { useDataContext } from "../context/Context";
const Navigator = () => {
	return (
		<div className='navigator min-h-[10rem] md:h-full lg:pr-16 md:pr-8 rounded-xl flex justify-center md:justify-start md:flex-col gap-6 lg:pl-8 md:pl-4 md:pt-10 pt-5'>
			<NavElement step={1} title={"YOUR INFO"} />
			<NavElement step={2} title={"SELECT PLAN"} />
			<NavElement step={3} title={"ADD-ONS"} />
			<NavElement step={4} title={"SUMMARY"} />
		</div>
	);
};

export default Navigator;

const NavElement = ({ step, title }) => {
	const { activePage } = useDataContext();
	return (
		<div className='flex gap-5 md:items-center font-ubuntuR'>
			<span
				className={`rounded-[50%] h-12 grid place-content-center aspect-square border-2 ${
					activePage === step ? "text-c1 bg-c4" : "text-white"
				} border-c4 font-ubuntuM text-xl`}>
				{step}
			</span>
			<span className='hidden md:flex flex-col'>
				<span className='text-md text-n1'>Step {step}</span>
				<span className='font-ubuntuB text-lg text-white'>{title}</span>
			</span>
		</div>
	);
};
