import { useNavigate } from "react-router-dom";

const MyButton = ({ to }) => {
 
	const navigate = useNavigate();

	return (
		<button className="my-button" onClick={() => 
			{ navigate(`/${to}`) }}>
			{to === '' ? "Home" : to}
		</button>
	)
}

export default MyButton;
