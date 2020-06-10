import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardMedia,
	Typography,
	CardContent,
	Button,
	CardActionArea,
	CardActions,
} from '@material-ui/core';

import theme from '../../theme/theme';
import card from '../../types/card';

const useStyles = makeStyles({
	media: {
		height: 140,
		transition: 'mixBlendMode .5s',
		opacity: .75,
		// mixBlendMode: 'hard-light',
		'&:hover': {
			mixBlendMode: 'normal',
		},
	},
	mediaCont: {
		background: theme.palette.primary.main,
		transition: '.5s',
		'&:hover': {
			backgroundOpacity: 0,
		},
	},
});

const CardWrapper = ({ title, imgTitle, img, link, id }: card) => {
	const classes = useStyles();
	return (
		<Card>
			<div className={classes.mediaCont}>
				<CardMedia image={img} title={imgTitle} className={classes.media} />
			</div>
			<CardContent>
				<Typography variant="h6">{title}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary" href={link}>
					View
				</Button>
			</CardActions>
		</Card>
	);
};

export default CardWrapper;
