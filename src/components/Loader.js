import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {



	return (
		<div className="loader-wrap">
			<Spinner
			  type="Oval"
			  color="#74ACC8"
			  height={80}
			  width={80}
			  timeout={3000} //3 secs
			/>
		</div>
	);
};

export default Loader;
