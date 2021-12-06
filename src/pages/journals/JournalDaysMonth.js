import * as React from 'react';
import ReactDOM from 'react-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import JournalPagesIssue from './JournalPagesIssue.js'

const JournalDaysMonth = (journalId, year, month) => {

	fetch('http://127.0.0.1:8000/api/journals/journal-issues/' + journalId + '/' + year + '/' + month,
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
		ReactDOM.render('', document.getElementById('page'));

		content.push(
			<FormControl sx={{ m: 1, minWidth: 120 }}>
			  <InputLabel id="journal-issues">Edição</InputLabel>
			  <Select
				labelId="journal-issues"
				id="journal-issues"
				label="Edição"
				onChange={(issue) => getPagesIssue(data.journal, data.year, data.month, issue.target.value)}
			  >
				{data.days.map((key, value) => {
					return (
						<MenuItem value={key}>{key}</MenuItem>
						)
					})
				}
				</Select>
			</FormControl>
		)
	
		return (
			ReactDOM.render(content, document.getElementById('issue'))
		);
	}

	function getPagesIssue(journalId, year, month, issue)
	{
		JournalPagesIssue(journalId, year, month, issue)
	}

}

export default JournalDaysMonth;