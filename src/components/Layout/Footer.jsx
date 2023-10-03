// Components - Material UI
import { Box, Typography } from "@mui/material";

// Material Icons - Material UI
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
	return (
		<>
			<Box
				sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
			>
				<Box
					sx={{
						my: 3,
						"& svg": {
							fontSize: "60px",
							cursor: "pointer",
							mr: 2,
						},
						"& svg:hover": {
							color: "goldenrod",
							transform: "translatex(5px)",
							transition: "all 400ms",
						},
					}}
				>
					<InstagramIcon />
					<TwitterIcon />
					<GitHubIcon />
					<YouTubeIcon />
				</Box>
				<Typography
					variant="h5"
					sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
				>
					All Rights Reserved <CopyrightIcon /> DevJaimeSantiago{" "}
				</Typography>
			</Box>
		</>
	);
};
export default Footer;
