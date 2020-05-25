import React, { Fragment } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import homePageImg from './assets/HomePage.jpg';
import ImageFilter from 'react-image-filter';
import theme from './theme/theme';

const useStyles = makeStyles({
	homeImage: {
		width: '100%',
		height: '40vh',
	},
});

const HomePage = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<ImageFilter
						preserveAspectRatio="cover"
						className={classes.homeImage}
						image={homePageImg}
						filter={'duotone'}
						colorOne={[0, 0, 0]}
						colorTwo={[175, 23, 11]}
					/>
				</Grid>
				<Container>
					<Grid item xs={12}>
						<Typography variant="h5" align="center">
							LA IDeA encourages scientific research in Louisiana
						</Typography>
						<Typography variant="h6" align="center">
							LA IDeA is made possible through the gracious support of the NIH.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" align="center">
							Lorum ipsum Hear my voice. Come back to the light. Burned day
							beauty outside tea yesterday renown lord's Greenwood barge dare
							sauteed. Dory worst fools orchards frightening! Leader darken
							Brandybucks inferno. Ready respectable danger help surrender
							deliver Bracegirdle. Warg forked sleepies? Yourselves encampment
							draws deceit column valor send Were-worms overrun clean failing?
							Gon fellow unmade hours.
						</Typography>
					</Grid>
				</Container>
			</Grid>
		</Fragment>
	);
};

export default HomePage;
