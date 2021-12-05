import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import JournalMonthsYear from './JournalMonthsYear.js'

const JournalYears = (id) => {

	fetch('http://127.0.0.1:8000/api/journals/journal-years/' + id,
		{
			method:"GET",
			headers:
			{
				"Content-Type" : "application/text",
			}
		})
		.then((response) => response.json())
		.then((value) => results(value))

	function results(data)
	{
		const content = []
		content.push(
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={1}>
					<Grid id="year" item xs={3}>
						<FormControl sx={{ m: 1, minWidth: 120 }}>
							<InputLabel id="journal-years">Ano</InputLabel>
							<Select
								labelId="journal-years"
								id="journal-years"
								label="Ano"
								onChange={(year) => getMonthsYear(data.journal.id, year.target.value)}
							>
								{data.years.map((key, value) => {
									return (
										<MenuItem value={key}>{key}</MenuItem>
										)
									})
								}
								</Select>
						</FormControl>
					</Grid>
					<Grid id="month" item xs={3}>
					</Grid>
					<Grid id="issue" item xs={3}>
					</Grid>
					<Grid id="page" item xs={3}>
					</Grid>
				</Grid>
				<Grid>
					<div id="page-viewer"></div>
				</Grid>

			</Box>
		)
		
		return (
			ReactDOM.render(content, document.getElementById('appView'))
		);
	}

	function getMonthsYear(journalId, year)
	{
		JournalMonthsYear(journalId, year)
	}

}

export default JournalYears;