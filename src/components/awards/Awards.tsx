import React, { useState, useEffect } from 'react';
import {
	Grid,
	Typography,
	Container,
	Card,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import card from '../../types/card';
import theme from '../../theme/theme';
import { cardData } from './newestCardData';
import Cards from './Cards';
import unique from '../../utility/unique';

const useStyles = makeStyles({
	title: {
		marginTop: 50,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		marginTop: 50,
	},
});

const Awards = () => {
	const [filteredData, setFilteredData] = useState(cardData);
	const [institutionFilter, setInstitutionFilter] = useState('');
	const [fiscalFilter, setFiscalFilter] = useState(2020);

	useEffect(() => {
		handleFilterData(filterByInstitution, institutionFilter, cardData);
	}, [institutionFilter]);

	useEffect(() => {
		handleFilterData(filterByFiscalYear, fiscalFilter, cardData);
	}, [fiscalFilter]);

	const handleInstitutionFilter = (e: any) => {
		setInstitutionFilter(e.target.value);
	};

	const handleFiscalFilter = (e: any) => {
		setFiscalFilter(e.target.value);
	};

	function handleFilterData(
		filterFunction: (data: card[], filter: any) => card[],
		filter: string | number,
		data: card[]
	) {
		const filtered = filterFunction(data, filter);
		console.log(filtered);
		setFilteredData(filtered);
	}

	function filterByInstitution(data: card[], filter: string) {
		return data.filter((card: card) => card.institution === filter);
	}

	function filterByFiscalYear(data: card[], filter: number) {
		return data.filter((card: card) => card.fiscalYear === filter);
	}

	// TODO: refactor
	function createMenuItems(
		data: card[],
		targetValue: 'institution' | 'fiscalYear'
	) {
		const items = data.map((i: card) => i[targetValue]);
		const uniqueItems = unique(items);
		return uniqueItems.map((value: string) => (
			<MenuItem key={value} value={value}>
				{value}
			</MenuItem>
		));
	}

	const classes = useStyles();
	return (
		<Container>
			<Grid container spacing={3} justify="center">
				<Grid item xs={6}>
					<Typography variant="h4" className={classes.title}>
						Awards
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<FormControl className={classes.formControl}>
						<InputLabel id="simple-select-label">Institution</InputLabel>
						<Select
							labelId="simple-select-label"
							id="simple-select"
							value={institutionFilter}
							onChange={(e) => handleInstitutionFilter(e)}
						>
							<MenuItem key="all" value="">
								All
							</MenuItem>
							{createMenuItems(cardData, 'institution')}
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="simple-select-label">Fiscal Year</InputLabel>
						<Select
							labelId="simple-select-label"
							id="simple-select"
							value={fiscalFilter}
							onChange={(e) => handleFiscalFilter(e)}
						>
							<MenuItem key="all" value="">
								All
							</MenuItem>
							{createMenuItems(cardData, 'fiscalYear')}
						</Select>
					</FormControl>
				</Grid>
				<Grid container item xs={12} spacing={3}>
					<Cards
						cardData={
							institutionFilter || fiscalFilter ? filteredData : cardData
						}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Awards;
