import { Link } from "react-router-dom";

const NextButton = ({ link, text }) => {
  return (
    <Link
      to={link}
      className="bg-c1 hover:bg-c2 w-44 text-center transition-all text-white font-ubuntuM  px-5 py-3 rounded-md"
    >
      {text ? text : "Next Step"}
    </Link>
  );
};

export default NextButton;
