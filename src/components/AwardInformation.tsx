import React from 'react';
import {
	Grid,
	Typography,
	Container,
	ExpansionPanel,
	ExpansionPanelSummary,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	title: {
		marginTop: 50,
	},
});

const AwardInformation = () => {
	const classes = useStyles();
	return (
		<Grid container>
			<Container>
				<Grid item xs={12}>
					<Typography variant="h4" className={classes.title}>
						Award Information
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<ExpansionPanel>
						<ExpansionPanelSummary component={Link} to="/awards">
							<Typography>IDeA Awards</Typography>
						</ExpansionPanelSummary>
					</ExpansionPanel>
					<ExpansionPanel disabled>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							id="principalInvestigators-content"
							aria-controls="principalInvestigators-header"
						>
							<Typography>Principal Investigators</Typography>
						</ExpansionPanelSummary>
					</ExpansionPanel>
					<ExpansionPanel disabled>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							id="institutions-content"
							aria-controls="institutions-header"
						>
							<Typography>Institutions</Typography>
						</ExpansionPanelSummary>
					</ExpansionPanel>
					{/* <ExpansionPanel disabled>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							id="senators-content"
							aria-controls="senators-header"
						>
							<Typography>Senators</Typography>
						</ExpansionPanelSummary>
					</ExpansionPanel>
					<ExpansionPanel disabled>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							id="representatives-content"
							aria-controls="representatives-header"
						>
							<Typography>US Representatives</Typography>
						</ExpansionPanelSummary>
					</ExpansionPanel> */}
					<ExpansionPanel disabled>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							id="regents-content"
							aria-controls="regents-header"
						>
							<Typography>LA Board of Regents</Typography>
						</ExpansionPanelSummary>
					</ExpansionPanel>
				</Grid>
			</Container>
		</Grid>
	);
};

export default AwardInformation;
