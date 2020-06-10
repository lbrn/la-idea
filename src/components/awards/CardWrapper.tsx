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

const useStyles = makeStyles({
	media: {
		height: 140,
		mixBlendMode: 'luminosity', // multiply also looks good here
		transition: 'all .5s ease',
		'&:hover': {
			mixBlendMode: 'normal',
		},
	},
	mediaCont: {
		background: theme.palette.primary.main,
	},
});

interface cardWrapper {
	imgTitle: string;
	title: string;
	img: string;
	link: string;
}

const CardWrapper = ({ title, imgTitle, img, link }: cardWrapper) => {
	const classes = useStyles();
	return (
		<Card>
			<div className={classes.mediaCont}>
				<CardMedia image={img} title={imgTitle} className={classes.media} />
			</div>
			<CardContent>
				<Typography variant="h5">{title}</Typography>
			</CardContent>
			<CardActionArea>
				<CardActions>
					<Button size="small" color="primary" href={link}>
						View
					</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default CardWrapper;
