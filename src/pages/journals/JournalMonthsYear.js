import * as React from 'react';
import ReactDOM from 'react-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import JournalDaysMonth from './JournalDaysMonth.js'

const JournalMonthsYear = (journalId, year) => {

	fetch('http://127.0.0.1:8000/api/journals/journal-months/' + journalId + '/' + year,
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
		ReactDOM.render('', document.getElementById('issue'));
		ReactDOM.render('', document.getElementById('page'));

		content.push(
			<FormControl sx={{ m: 1, minWidth: 120 }}>
			  <InputLabel id="journal-months">Mês</InputLabel>
			  <Select
				labelId="journal-months"
				id="journal-months"
				label="Mes"
				onChange={(month) => getDaysMonth(data.journal.id, data.year, month.target.value)}
			  >
				{data.months.map((key, value) => {
					return (
						<MenuItem value={key}>{key}</MenuItem>
						)
					})
				}
				</Select>
			</FormControl>
		)
	
		return (
			ReactDOM.render(content, document.getElementById('month'))
		);
	}

	function getDaysMonth(journalId, year, month)
	{
		JournalDaysMonth(journalId, year, month)
	}
}

export default JournalMonthsYear;