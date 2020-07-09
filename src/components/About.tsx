import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	title: {
		marginTop: 50,
	},
});

const About = () => {
	const classes = useStyles();
	return (
		<Grid container>
			<Container>
				<Grid item xs={12}>
					<Typography variant="h4" className={classes.title}>
						About
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1" className={classes.title}>
						The Institutional Development Award (IDeA) is a congressionally
						mandated program that builds research capacity in states that
						historically have had low levels of NIH funding. It supports
						competitive basic, clinical, and translational research, faculty
						development, and infrastructure improvements.
					</Typography>
					<Typography variant="body1" className={classes.title}>
						The program aims to strengthen an institution’s ability to support
						biomedical research, enhance the competitiveness of investigators in
						securing research funding, and enable clinical and translational
						research that addresses the needs of medically underserved
						communities.
					</Typography>
				</Grid>
			</Container>
		</Grid>
	);
};

export default About;
