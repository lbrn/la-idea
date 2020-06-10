import React, { useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';

import { cardData } from './CardData';
import card from '../../types/card';
import CardWrapper from './CardWrapper';

const Cards = () => {
	const createCards = (datas: card[]) => {
		return datas.map((data) => (
			<Grid item xs={12} sm={6} md={4}>
				<CardWrapper
					img={data.img}
					title={data.title}
					imgTitle={data.imgTitle}
					id={data.id}
					link={data.link}
					key={data.id}
				/>
			</Grid>
		));
	};
	return <Fragment>{cardData && createCards(cardData)}</Fragment>;
};

export default Cards;
