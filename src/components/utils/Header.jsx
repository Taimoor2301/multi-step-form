const Header = ({ title, sub }) => {
	return (
		<section>
			<h1 className='text-3xl font-ubuntuB text-c1 mb-1'>{title}</h1>
			<p className='text-n1 font-ubuntuR'>{sub}</p>
		</section>
	);
};

export default Header;
