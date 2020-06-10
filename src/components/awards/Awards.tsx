import React from 'react';
import { Grid, Typography, Container, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import CardWrapper from './CardWrapper';
import { demoPicture } from '../../assets/index';

const useStyles = makeStyles({
	title: {
		marginTop: 50,
	},
});

const Awards = () => {
	const classes = useStyles();
	return (
		<Container>
			<Grid container spacing={3} justify="center">
				<Grid item xs={12}>
					<Typography variant="h4" className={classes.title}>
						Awards
					</Typography>
				</Grid>
				<Grid container item xs={12} spacing={3}>
					<Grid item xs={6}>
						<CardWrapper
							title="demo title"
							imgTitle="demo imgTitle"
							img={demoPicture}
							link={"https://google.com"}
						/>
					</Grid>
					<Grid item xs={6}>
						<CardWrapper
							title="demo title"
							imgTitle="demo imgTitle"
							img={demoPicture}
							link={"https://google.com"}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Awards;
