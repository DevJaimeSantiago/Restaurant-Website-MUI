// Components
import Layout from "../components/Layout/Layout";

// Components - Material UI
import { Box, Typography } from "@mui/material";

const About = () => {
	return (
		<Layout>
			<Box
				sx={{
					my: 15,
					textAlign: "center",
					p: 2,
					"& h4": {
						fontWeight: "bold",
						my: 2,
						fontSize: "2rem",
					},
					"& p": { textAlign: "justify" },
					"@media (max-width: 600px)":{
						mt: 0,
						"& h4":{fontSize: "1.5rem"},
					}
				}}
			>
				<Typography variant="h4">Welcome To My Restaurant</Typography>

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
					molestiae libero porro. Commodi laborum aliquid, modi possimus beatae
					obcaecati velit aperiam minima accusamus aut dolores cumque nulla quas
					delectus. Doloribus tempore nulla corrupti, molestias culpa aliquam
					magni atque exercitationem sequi ratione ducimus cum beatae assumenda
					placeat earum. Dolor non vitae quas modi, asperiores consequatur qui
					placeat molestiae cum vel ab doloribus fuga optio eius. Laudantium
					molestias itaque cupiditate inventore, magni dolor ex, adipisci ipsam
					iusto quidem repudiandae debitis assumenda saepe tenetur unde iste
					maiores quos porro repellat deleniti? Numquam ipsa animi id neque
					vitae architecto minima odit ratione iste sequi?
				</p>

				<br />

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					esse doloribus commodi blanditiis veritatis obcaecati, aliquam vero
					rerum nulla quam sed repellat cumque quis at nam ex doloremque beatae
					error sit quidem aliquid magni illo adipisci necessitatibus.
					Exercitationem error consequatur perspiciatis corrupti neque odio
					saepe molestias! Et cupiditate optio sunt vero totam atque commodi
					iure maiores numquam velit vel, sed, provident nihil culpa nesciunt
					alias repellat dolor veniam. Commodi asperiores, voluptas tempore eum
					magnam ea dolor quasi veritatis velit vel dolores, ipsum neque
					mollitia maxime doloribus dignissimos? Accusamus esse sequi placeat
					dolore voluptas aliquam quo neque eligendi nisi, voluptatibus quaerat!
				</p>
			</Box>
		</Layout>
	);
};
export default About;
