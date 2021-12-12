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
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

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
			<Grid>
				{/* <FormControl sx={{ width: 600 }}> */}
					{/* <TextField
						id="journal-title"
						label="Nome do Jornal"
						color="success"
						variant="standard"
						value={data.journal.title + ' - ' + data.journal.localization}/> */}
				{/* </FormControl> */}
				<h2>Nome do Periódico: {data.journal.title + ' - ' + data.journal.localization}</h2>
				<h4>Período do acervo: {data.startDate + ' - ' + data.endDate}</h4>
				{/* <FormControl sx={{ width: 600 }}> */}
					{/* <TextField
						id="journal-title"
						label="Disponibilidade do Acervo"
						color="success"
						variant="standard"
						value={data.startDate + ' - ' + data.endDate}/> */}
				{/* </FormControl> */}
				{/* <br />
				<br /> */}
				<Divider />
				<h4>Escolha uma Edição</h4>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container item xs={12}>
						<Grid id="year" item xs={2}>
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
											<MenuItem
												key={'year' + key}
												value={key}
											>{key}</MenuItem>
											)
										})
									}
									</Select>
							</FormControl>
						</Grid>
						<Grid id="month" item xs={2}>
						</Grid>
						<Grid id="issue" item xs={2}>
						</Grid>
						<Grid id="page" item xs={2}>
						</Grid>
					</Grid>
					<Grid>
						<div id="page-viewer"></div>
					</Grid>
				</Box>
				<br />
				<Divider />
				<br />
				<Box>
					<Grid>
						<div id="citation-viewer"></div>
					</Grid>
				</Box>
			</Grid>
		)
		content.push(
			<Box>
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