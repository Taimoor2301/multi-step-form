import Layout from "./utils/Layout";
import Header from "./utils/Header";
import { thankYou } from "../assets/images";

const Thankyou = () => {
	return (
		<div className='flex flex-col justify-center items-center max-w-md text-center h-full gap-8'>
			<img src={thankYou} alt='' />
			<Header title='Thank you!' sub={text} />
		</div>
	);
};

export default Thankyou;

const text =
	"Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@gmail.com.";
