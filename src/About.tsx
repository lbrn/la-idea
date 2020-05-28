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
						IDeA Networks of Biomedical Research Excellence (INBRE) foster the
						development, coordination and sharing of research resources, and
						expertise that will expand research opportunities and increase the
						number of competitive investigators in IDeA-eligible states.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1" className={classes.title}>
						INBRE grants are intended to enhance the caliber of scientific
						faculty at research institutions and undergraduate schools who can
						attract more talented students to augment the science and technology
						knowledge of the state's workforce.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1" className={classes.title}>
						An INBRE award supports a multidisciplinary research network with a
						broad biomedical or behavioral thematic focus that strengthens
						research expertise and infrastructure and spurs interaction with
						other IDeA programs.
					</Typography>
				</Grid>
			</Container>
		</Grid>
	);
};

export default About;
