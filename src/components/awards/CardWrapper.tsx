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
	mediaCont: {
		background: theme.palette.primary.main,
	},
});

type cardWrapper = Pick<
	card,
	| 'title'
	| 'imgTitle'
	| 'img'
	| 'grantLink'
	| 'investigator'
	| 'investigatorLink'
	| 'institution'
	| 'institutionLink'
>;

const CardWrapper = ({
	title,
	imgTitle,
	img,
	grantLink,
	investigator,
	investigatorLink,
	institution,
	institutionLink,
}: cardWrapper) => {
	const classes = useStyles();
	return (
		<Card>
			<div className={classes.mediaCont}>
				<CardMedia image={img} title={imgTitle} className={classes.media} />
			</div>
			<CardContent>
				<Typography variant="h6">{title}</Typography>
				<Link variant="body2" href={investigatorLink}>
					{investigator}
				</Link>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary" href={grantLink}>
					View
				</Button>
				<Button size="small" color="primary" href={institutionLink}>
					{institution}
				</Button>
			</CardActions>
		</Card>
	);
};

export default CardWrapper;
