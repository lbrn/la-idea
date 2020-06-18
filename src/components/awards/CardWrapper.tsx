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
			opacity: 1
		}
	},
	mediaCont: {
		background: theme.palette.primary.main,
	},
});

const CardWrapper = ({
	title,
	imgTitle,
	img,
	grantLink,
	id,
	investigator,
	investigatorLink,
	institution,
	institutionLink
}: card) => {
	const classes = useStyles();
	return (
		<Card>
			<div className={classes.mediaCont}>
				<CardMedia image={img} title={imgTitle} className={classes.media} />
			</div>
			<CardContent>
				<Typography variant="h6">{title}</Typography>
				<Link variant="body1" href={institutionLink}>{institution}</Link> <br/>
				<Link variant="body2" href={investigatorLink}>{investigator}</Link>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary" href={grantLink}>
					View
				</Button>
			</CardActions>
		</Card>
	);
};

export default CardWrapper;
