// Components
import Layout from "../components/Layout/Layout";

// Components - Material UI
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";

// Material Icons - Material UI
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
	return (
		<Layout>
			<Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
				<Typography variant="h4">Contact my restaurant</Typography>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
					voluptatem quis explicabo voluptates, hic, sapiente similique
					repudiandae eaque at numquam, aperiam odio minus sunt illo debitis ut
					magni ab? Voluptatum.
				</p>
			</Box>

			<Box sx={{m: 3, width: "600px", ml: 10, "@media (max-width: 600px)":{
				width: "300px",
			}}}>
				<TableContainer>
					<Table aria-label="contact table">
						<TableHead>
							<TableRow>
								<TableCell sx={{background: "#000", color: "#fff"}} align="center">Contact Details</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							<TableRow>
								<TableCell>
									<SupportAgentIcon sx={{ color: "#f00", pt: 1 }} /> 800 - 000 - 0000
									(tollfree)
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>
									<EmailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>
									<CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Layout>
	);
};
export default Contact;
