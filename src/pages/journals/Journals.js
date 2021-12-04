import React from 'react';
import ReactDOM from 'react-dom';
import { DataGrid } from '@mui/x-data-grid';
import JournalDetails from './JournalDetails';
import { useEffect, useState } from 'react';

const Journals = () => {

	const [journals, setJournal] = useState({});

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/journals')
			.then(res => res.json())
			.then(json => setJournal(json))
			.catch(err => console.error(err));
	}, []);

	const columns = [
		{ field: "id", headerName: "Id", width: 50 },
		{ field: "titles", headerName: "Título", width: 300 },
		{ field: "noIssues", headerName: "nº de edições", width: 120 },
		{ field: "noPages", headerName: "nº de páginas", width: 120 },
		{ field: "startDate", headerName: "Data de Início",	type: "number", width: 120 },
		{ field: "endDate", headerName: "Data de Término", type: "number",	width: 140 },
	];

	const handleRowClick = rowData => {
		ReactDOM.render(<JournalDetails idJournal={rowData.id} />, document.getElementById('appView'));
	};

	return (
		<DataGrid
			rows={journals}
			key={(row) => row.id}
			columns={columns}
			pageSize={15}
			onRowClick={handleRowClick}
			rowsPerPageOptions={[4]}
		/>
	);

	function getYears(data)
	{
		
	}
};

export default Journals;
