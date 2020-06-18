import React from 'react';
import {
	Grid,
	Typography,
	Container,
	Card,
	CardActions,
	Button,
	CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { resourceData } from './resourceData';

const useStyles = makeStyles({
	title: {
		marginTop: 50,
	},
});

const Resources = () => {
	const classes = useStyles();
	const createResources = (data: any) => {
		return data.map((item: any) => (
			<Grid item xs={6} sm={4}>
				<Card>
					<CardContent>
						<Typography variant="h6">{item.title}</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary" href={item.link}>
							View
						</Button>
					</CardActions>
				</Card>
			</Grid>
		));
	};
	return (
		<Container>
			<Grid item xs={12}>
				<Typography variant="h4" className={classes.title}>
					Resources
				</Typography>
			</Grid>
			<Grid container item xs={12} spacing={3}>
				{createResources(resourceData)}
			</Grid>
		</Container>
	);
};

export default Resources;
