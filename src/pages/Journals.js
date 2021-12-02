import React from 'react';
import ReactDOM from 'react-dom';
// import { DataGrid } from '@mui/x-data-grid';

const Journals = () => {

	const element = 'Hemeroteca';

	fetch('http://127.0.0.1:8000/api/journals',
		{
			method:"GET",
			headers:
			{
				"Content-Type" : "application/json",
			}
		})
		.then((response) => response.json())
		.then(({data}) => results(data));

	function results(data)
	{
		const content = []

		content.push(
			<table key="1">
				<tbody>
					{
						data.map((key, value) =>
						{
							return(
							<tr key={value}>
								<td>
								{key.attributes.title}
								</td>
							</tr>)
						})
					}
				</tbody>
			</table>
			)

		return (
			ReactDOM.render(content, document.getElementById('appView'))
		);

	}

}

export default Journals;