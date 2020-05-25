import React, { Fragment } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import homePageImg from './assets/HomePage.jpg';
import homePageFilter from './assets/homePageFilter.svg';

const useStyles = makeStyles({
	homeImage: {
		width: '100%',
		height: '30vh',
		// height: '50vh',
		objectFit: 'cover',
		filter: `url(${homePageFilter})`
	},
});

const HomePage = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<img
				className={classes.homeImage}
				alt="scientists"
				// src="https://i.picsum.photos/id/1023/200/300.jpg"
				src={homePageImg}
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
