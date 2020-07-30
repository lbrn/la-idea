import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { cardData } from '../data/cardData';
import card from '../types/card';
import CardWrapper from './awards/CardWrapper';
import { institutionImages } from '../assets/institutions/index';

const useStyles = makeStyles({
	title: {
		marginTop: 50,
	},
});

const Institutions = () => {
	const classes = useStyles();
	const createCards = (cards: card[]) => {
		const institutions: { [name: string]: boolean } = {};
		// checks cards against institutions flag list to determine if they are unique
		const uniqueData = cards.filter((card) => {
			if (institutions[card.institutionCode]) {
				return false;
			}
			institutions[card.institutionCode] = true;
			return true;
		});

		return uniqueData.map((card) => (
			<Grid item xs={12} sm={6}>
				<CardWrapper
					title={card.institution}
					img={institutionImages[card.institutionCode]}
					imageLink={card.institutionLink}
					imgTitle={card.institution}
					primary={card.institution}
					primaryLink={card.institutionLink}
				/>
			</Grid>
		));
	};
	return (
		<Grid container>
			<Container>
				<Grid container xs={12} spacing={3}>
					<Typography variant="h4" className={classes.title}>
						Institutions
					</Typography>
				</Grid>{' '}
				<Grid container xs={12} spacing={3}>
					{cardData && createCards(cardData)}
				</Grid>
			</Container>
		</Grid>
	);
};

export default Institutions;
