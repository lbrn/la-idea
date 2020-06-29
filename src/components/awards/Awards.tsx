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
import { cardData } from './cardData';
import CardWrapper from './CardWrapper';
import { demoPicture } from '../../assets/index';
import Cards from './Cards';

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

	useEffect(() => {
		handleFilterData(filterByInstitution, institutionFilter, cardData);
	}, [institutionFilter]);

	const handleInstitutionFilter = (e: any) => {
		setInstitutionFilter(e.target.value);
	};

	function handleFilterData(
		filterFunction: (data: card[], filter: string) => card[],
		filter: string,
		data: card[]
	) {
		const filtered = filterFunction(data, filter);
		setFilteredData(filtered);
	}

	function filterByInstitution(data: card[], filter: string) {
		return data.filter((card: card) => card.institution === filter);
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
							<MenuItem value={'LSU'}>LSU</MenuItem>
							<MenuItem value={'LSUHSC'}>LSUHSC</MenuItem>
							<MenuItem value={'Pennington Biomedical'}>
								Pennington Biomedical
							</MenuItem>
							<MenuItem value={''}>
								All
							</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid container item xs={12} spacing={3}>
					<Cards cardData={institutionFilter ? filteredData : cardData} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Awards;
