import React, { Fragment } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { hero } from '../assets/index';
import ImageFilter from 'react-image-filter';
import theme from '../theme/theme';

const useStyles = makeStyles({
	homeImage: {
		width: '100%',
		height: '40vh',
	},
	bodyText: {
		margin: theme.spacing(3),
	},
	pageContent: {
		marginBottom: theme.spacing(3),
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
						image={hero}
						filter={'duotone'}
						colorOne={[0, 0, 0]}
						colorTwo={[175, 23, 11]}
					/>
				</Grid>
				<Container className={classes.pageContent}>
					<Grid item xs={12}>
						<Typography variant="h5" align="center">
							LA IDeA encourages scientific research in Louisiana
						</Typography>
						<Typography variant="h6" align="center">
							LA IDeA is made possible through the gracious support of the NIH.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="body1"
							className={classes.bodyText}
							align="center"
						>
							IDeA Networks of Biomedical Research Excellence (INBRE) foster the
							development, coordination and sharing of research resources, and
							expertise that will expand research opportunities and increase the
							number of competitive investigators in IDeA-eligible states.
						</Typography>
						<Typography
							variant="body1"
							className={classes.bodyText}
							align="center"
						>
							INBRE grants are intended to enhance the caliber of scientific
							faculty at research institutions and undergraduate schools who can
							attract more talented students to augment the science and
							technology knowledge of the state's workforce.
						</Typography>
						<Typography
							variant="body1"
							className={classes.bodyText}
							align="center"
						>
							An INBRE award supports a multidisciplinary research network with
							a broad biomedical or behavioral thematic focus that strengthens
							research expertise and infrastructure and spurs interaction with
							other IDeA programs.
						</Typography>
					</Grid>
				</Container>
			</Grid>
		</Fragment>
	);
};

export default HomePage;
