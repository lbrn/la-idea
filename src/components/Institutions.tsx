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
			<Grid item xs={12} sm={6} key={card.id}>
				<CardWrapper
					title={card.institution}
					img={institutionImages[card.institutionCode]}
					imageLink={card.institutionLink}
					imgTitle={card.institution}
					primaryLink={card.institutionLink}
					hasTitleLink={true}
				/>
			</Grid>
		));
	};
	return (
		<Grid container>
			<Container>
				<Grid item xs={12}>
					<Typography variant="h4" className={classes.title}>
						Institutions
					</Typography>
				</Grid>{' '}
				<Grid container spacing={3}>
					{cardData && createCards(cardData)}
				</Grid>
			</Container>
		</Grid>
	);
};

export default Institutions;
