import React from 'react';
import {
	Grid,
	Typography,
	Container,
	Card,
	CardActions,
	Button,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { resourceData, resourceCard } from './resourceData';
import theme from '../../theme/theme';

const useStyles = makeStyles({
	title: {
		marginTop: 50,
	},
	media: {
		height: 140,
		opacity: 0.75,
		transition: '.3s all',
		'&:hover': {
			opacity: 1,
		},
	},
	mediaCont: {
		background: theme.palette.primary.main,
	},
	img: {
		objectPosition: 'left top',
	}
});

const Resources = () => {
	const classes = useStyles();
	const createResources = (data: resourceCard[]) => {
		return data.map((item: any) => (
			<Grid item xs={6}>
				<Card>
					<div className={classes.mediaCont}>
						<CardMedia
							image={item.img}
							title={item.imgTitle}
							className={classes.media}
							classes={{ root: classes.img }}
						/>
					</div>
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
