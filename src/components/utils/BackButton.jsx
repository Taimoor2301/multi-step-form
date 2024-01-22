import { Link } from "react-router-dom";

const BackButton = ({ link }) => {
	return (
		<Link to={link} className='text-md font-ubuntuM text-n1 hover:text-neutral-600'>
			Go Back
		</Link>
	);
};

export default BackButton;
