

const AppWrapper = ({ children }) => {

	return (
		<div className='main-wrap'>
			<main>
				{children}
			</main>
		</div>
	);
};

export default AppWrapper;
