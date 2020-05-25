import React, { Fragment } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import homePageImg from './assets/HomePage.jpg';
import ImageFilter from 'react-image-filter';
import theme from './theme/theme';

const useStyles = makeStyles({
	homeImage: {
		width: '100%',
		height: '30vh',
		// height: '50vh',
		// objectFit: 'cover',
		// filter: `url(${homePageFilter})`
	},
});

const HomePage = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<ImageFilter
				image={homePageImg}
				filter={'duotone'}
				colorOne={[40, 250, 250]}
				colorTwo={theme.palette.primary.main}
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
