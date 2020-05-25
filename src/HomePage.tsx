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
			<ImageFilter
				preserveAspectRatio="cover"
				className={classes.homeImage}
				image={homePageImg}
				filter={'duotone'}
				colorOne={[0, 0, 0]}
				colorTwo={[175, 23, 11]}
			/>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography variant="h5">
							LA IDeA encourages scientific research in Louisiana, through the
							gracious support of NIH.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
};

export default HomePage;
