import React from 'react';
import ReactDOM from 'react-dom';
import { DataGrid } from '@mui/x-data-grid';
import JournalYears from './JournalYears.js'

const Journals = () => {

	fetch('http://127.0.0.1:8000/api/journals')
		.then(res => res.json())
		.then(json => results(json))
		.catch(err => console.error(err));

	const columns = [
		{ field: "id", headerName: "Id", type: "number", width: 50 },
		{ field: "titles", headerName: "Título", type: "text", width: 300 },
		{ field: "noIssues", headerName: "nº de edições", type: "number", width: 120 },
		{ field: "noPages", headerName: "nº de páginas", type: "number", width: 120 },
		{ field: "startDate", headerName: "Data de Início",	type: "number", width: 120 },
		{ field: "endDate", headerName: "Data de Término", type: "number",	width: 140 },
	];

	function results(data)
	{
		const content = []

		const rows = data.map(data => {
			return {
				id: data.id,
				titles: data.titles,
				noIssues: data.noIssues,
				noPages: data.noPages,
				startDate: data.startDate,
				endDate: data.endDate,
			}
		});

		content.push(
			<DataGrid
				rows={rows}
				key={(row) => row.id}
				columns={columns}
				pageSize={15}
				onRowClick={(data) => getYears(data.id)}
				rowsPerPageOptions={[4]}
			/>
		)

		return (
			ReactDOM.render(content, document.getElementById('appView'))
		);
	}

	function getYears(data)
	{
		JournalYears(data)
	}

}

export default Journals;