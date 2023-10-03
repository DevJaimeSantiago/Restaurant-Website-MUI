import { Link } from "react-router-dom";
import "../styles/HomeStyles.css"

// Components
import Layout from "../components/Layout/Layout";

// images
import Banner from "../images/banner.jpeg"

const Home = () => {
	return (
		<Layout>
			<div className="home" style={{backgroundImage: `url(${Banner})`}}>
				<div className="headerContainer">
					<h1>Food Website</h1>
					<p>Best Food In India</p>
					<Link to="/menu">
						<button>ORDER NOW</button>
					</Link>
				</div>
			</div>
		</Layout>
	);
};
export default Home;
