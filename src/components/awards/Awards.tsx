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
	Switch,
	FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import card from '../../types/card';
import theme from '../../theme/theme';
import { cardData } from '../../data/newestCardData';
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
	formControlSwitch: {
		margin: theme.spacing(1),
		minWidth: 120,
		marginTop: 60,
	},
});

const Awards = () => {
	const [filteredData, setFilteredData] = useState(cardData);
	const [institutionFilter, setInstitutionFilter] = useState('');
	const [showExpired, setShowExpired] = useState(false);
	const [fiscalFilter, setFiscalFilter] = useState(2020);

	useEffect(() => {
		handleFilterData(filterByInstitution, institutionFilter, cardData);
	}, [institutionFilter]);

	useEffect(() => {
		handleFilterData(filterByFiscalYear, fiscalFilter, cardData);
	}, [fiscalFilter]);

	useEffect(() => {
		handleFilterData(filterByExpired, showExpired, cardData);
	}, [showExpired]);

	const handleFilter = (e: any, setFilter: React.SetStateAction<any>) => {
		setFilter(e.target.value);
	};

	dayjs.extend(customParseFormat);

	function handleFilterData(
		filterFunction: (data: card[], filter: any) => card[],
		filter: string | number | boolean,
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

	function filterByExpired(data: card[], showExpired: boolean) {
		const filterFunction = (date: string) => {
			if (showExpired) {
				return true;
			} else if (dayjs().isBefore(dayjs(date))) {
				return true;
			}
			return false;
		};
		console.log(
			data.filter((card: card) => filterFunction(card.expirationDate)).length
		);
		return data.filter((card: card) => filterFunction(card.expirationDate));
	}

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
				<Grid item xs={12}>
					<Typography variant="h4" className={classes.title}>
						Awards
					</Typography>
					<FormControl className={classes.formControl}>
						<InputLabel id="simple-select-label">Institution</InputLabel>
						<Select
							labelId="simple-select-label"
							id="simple-select"
							value={institutionFilter}
							onChange={(e) => handleFilter(e, setInstitutionFilter)}
						>
							<MenuItem key="all" value="">
								All
							</MenuItem>
							{createMenuItems(cardData, 'institution')}
						</Select>
					</FormControl>
					<FormControl className={classes.formControlSwitch}>
						<FormControlLabel
							control={
								<Switch
									checked={showExpired}
									onChange={() => setShowExpired(!showExpired)}
									name="awards:expired"
									color="primary"
									value={showExpired}
								/>
							}
							label="View expired"
						/>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="simple-select-label">Fiscal Year</InputLabel>
						<Select
							labelId="simple-select-label"
							id="simple-select"
							value={fiscalFilter}
							onChange={(e) => handleFilter(e, setFiscalFilter)}
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
							institutionFilter || fiscalFilter || showExpired
								? filteredData
								: cardData
						}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Awards;
