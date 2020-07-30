import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { cardData } from '../data/cardData';
import card from '../types/card';
import CardWrapper from './awards/CardWrapper';

const useStyles = makeStyles({
	title: {
		marginTop: 50,
	},
});

const Investigators = () => {
	const uniqueInvestigators: { [investigator: string]: boolean } = {};
	const uniqueData = cardData.filter((card) => {
		if (uniqueInvestigators[card.investigator]) {
			return false;
		}
		uniqueInvestigators[card.investigator] = true;
		return true;
	});
	uniqueData.sort(function (a, b) {
		if (a.investigator < b.investigator) {
			return -1;
		}
		if (a.investigator > b.investigator) {
			return 1;
		}
		return 0;
	});

	const createCards = (data: card[]) => {
		return data.map((card) => (
			<Grid item xs={6} sm={4} key={card.id}>
				<CardWrapper
					title={card.investigator}
					primaryLink={card.investigatorLink}
					hasTitleLink={true}
				/>
			</Grid>
		));
	};

	const classes = useStyles();
	return (
		<Grid container>
			<Container>
				<Grid item xs={12}>
					<Typography variant="h4" className={classes.title}>
						Investigators
					</Typography>
				</Grid>
				<Grid container item xs={12} spacing={3}>
					{uniqueData && createCards(uniqueData)}
				</Grid>
			</Container>
		</Grid>
	);
};

export default Investigators;
