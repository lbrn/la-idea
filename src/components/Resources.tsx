import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
	title: {
		marginTop: 50
	}
})

const Resources = () => {
	const classes = useStyles();
	return (
		<Grid container>
			<Container>
				<Grid item xs={12}>
					<Typography variant="h4" className={classes.title}>Resources</Typography>
				</Grid>
			</Container>
		</Grid>
	);
};

export default Resources;
