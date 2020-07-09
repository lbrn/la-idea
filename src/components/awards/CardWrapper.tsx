import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardMedia,
	Typography,
	CardContent,
	Button,
	CardActions,
	Link,
} from '@material-ui/core';

import theme from '../../theme/theme';
import card from '../../types/card';

const useStyles = makeStyles({
	media: {
		height: 140,
		opacity: 0.75,
		transition: '.3s all',
		'&:hover': {
			opacity: 1,
		},
	},
	img: {
		objectPosition: 'left top',
	},
	mediaCont: {
		background: theme.palette.primary.main,
	},
	card: {
		'&:hover': {
			media: {
				opacity: 1,
			},
		},
	},
});

interface cardWrapper {
	awardType?: string;
	imageLink?: string;
	img?: string;
	imgTitle?: string;
	secondaryAction?: string;
	secondaryActionLink?: string;
	primary: string;
	primaryLink: string;
	title?: string;
	isGrant?: boolean;
}

const CardWrapper = ({
	awardType,
	imageLink,
	img,
	imgTitle,
	secondaryAction,
	secondaryActionLink,
	primary,
	primaryLink,
	isGrant,
	title,
}: cardWrapper) => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<a className={classes.mediaCont} href={imageLink}>
				{img && (
					<CardMedia
						alt={imgTitle}
						title={imgTitle}
						image={img}
						className={classes.media}
						component="img"
						classes={{ root: classes.img }}
					/>
				)}
			</a>
			<CardContent>
				<Typography variant="h6">{title}</Typography>
				{primary && (
					<Link variant="body2" href={primaryLink}>
						{primary}
					</Link>
				)}
				{awardType && isGrant && (
					<Typography variant="body1">{awardType}</Typography>
				)}
			</CardContent>
			<CardActions>
				{isGrant && (
					<Button size="small" color="primary" href={imageLink}>
						NIH Info
					</Button>
				)}
				{secondaryAction && (
					<Button size="small" color="primary" href={secondaryActionLink}>
						{secondaryAction}
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default CardWrapper;
