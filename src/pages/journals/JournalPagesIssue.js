import * as React from 'react';
import ReactDOM from 'react-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ShowPageViewer from './ShowPageViewer.js'
import TextField from '@mui/material/TextField';

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
		const citation = []

		content.push(
			<FormControl sx={{ m: 1, minWidth: 120 }}>
			  <InputLabel id="journal-pages">Páginas</InputLabel>
			  <Select
				labelId="journal-pages"
				id="journal-pages"
				label="Página"
				onChange={(page) => getPageView(page)}
			  >
				{data.pages.map((key, value) => {
					return (
						<MenuItem
							key={'page' + key.id}
							value={key.id}
							onClick={() => setPageCitation(data, key.page_number)}
							onChange={() => setPageCitation(data, key.page_number)}
							>{key.page_number}</MenuItem>
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

	function setPageCitation(data, page)
	{
		var citationLabel = []
		var citationTextField = []
		
		citationLabel.push(
			data.journalTitle
			+ ', ' + 
			data.localization
			+ ', ' + 
			data.citationDate
			+ ', p.' + 
			page
			+ ' <http://archeion.br/hemeroteca-digital> Acesso em '
			+ data.now)

		citationTextField.push(
			<TextField
				id="citation"
				label="Citação"
				value={citationLabel}
				fullWidth={true}
				InputProps={{
					readOnly: true,
				}}
			/>
		)
	
		ReactDOM.render(citationTextField, document.getElementById('citation-viewer'))
	}

	function getPageView(pageId)
	{
		ShowPageViewer(pageId.target.value)
	}

}

export default JournalPagesIssue;