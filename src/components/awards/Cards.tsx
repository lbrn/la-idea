import React, { useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';

import { cardData } from './cardData';
import card from '../../types/card';
import CardWrapper from './CardWrapper';

interface cards {
	cardData: card[];
}

const Cards = ({ cardData }: cards) => {
	const createCards = (datas: card[]) => {
		return datas.map((data) => (
			<Grid item xs={12} sm={6} md={4} key={data.id}>
				<CardWrapper
					grantLink={data.grantLink}
					img={data.img}
					imgTitle={data.imgTitle}
					institution={data.institution}
					institutionLink={data.institutionLink}
					investigator={data.investigator}
					investigatorLink={data.investigatorLink}
					title={data.title}
				/>
			</Grid>
		));
	};
	return <Fragment>{cardData && createCards(cardData)}</Fragment>;
};

export default Cards;
