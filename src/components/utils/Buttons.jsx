import BackButton from "./BackButton";
import NextButton from "./NextButton";

const Buttons = ({ nextLink, prevLink, text }) => {
	return (
		<div className='w-full flex justify-between items-center mt-10'>
			<BackButton link={prevLink} />
			<NextButton link={nextLink} text={text} />
		</div>
	);
};

export default Buttons;
