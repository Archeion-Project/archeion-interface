import React from 'react';
import ReactDOM from 'react-dom';
import { DataGrid } from '@mui/x-data-grid';

const Journals = () => {

	fetch('http://127.0.0.1:8000/api/journals',
		{
			method:"GET",
			headers:
			{
				"Content-Type" : "application/text",
			}
		})
		.then((response) => response.json())
		.then((value) => results(value))

	const columns = [
		{ field: "id", headerName: "Id", width: 50 },
		{ field: "titles", headerName: "Título", width: 300 },
		{ field: "noIssues", headerName: "nº de edições", width: 120 },
		{ field: "noPages", headerName: "nº de páginas", width: 120 },
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
				onRowClick={(data)=>console.log(data.id)}
				rowsPerPageOptions={[4]}
			/>
		)

		return (
			ReactDOM.render(content, document.getElementById('appView'))
		);
	}

	function getYears(data)
	{
		
	}

}

export default Journals;