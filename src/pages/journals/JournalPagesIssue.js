import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ShowPageViewer from './ShowPageViewer.js'

const JournalPagesIssue = (journalId, year, month, issue) => {

	fetch('http://127.0.0.1:8000/api/journals/journal-pages/' + journalId + '/' + year + '/' + month + '/' + issue,
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
			<FormControl sx={{ m: 1, minWidth: 120 }}>
			  <InputLabel id="journal-pages">Páginas</InputLabel>
			  <Select
				labelId="journal-pages"
				id="journal-pages"
				label="Páginas"
				onChange={(page) => getPageView(page)}
			  >
				{data.pages.map((key, value) => {
					return (
						<MenuItem value={key.id}>{key.page_number}</MenuItem>
						)
					})
				}
				</Select>
			</FormControl>
		)
	
		return (
			ReactDOM.render(content, document.getElementById('page'))
		);
	}

	function getPageView(pageId)
	{
		ShowPageViewer(pageId.target.value)
	}


}

export default JournalPagesIssue;