import ReactDOM from 'react-dom';
import Journals from './Journals.js'
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const ShowPageViewer = (pageId) => {

	fetch('http://127.0.0.1:8000/api/journals/journal-page/' + pageId,
		{
			method:"GET",
			headers:
			{
				"Content-Type" : "application/text",
			}
		})
		.then((response) => response.json())
		.then((value) => imagem(value))
		.catch(error => {console.log(error)})

	function imagem(value)
	{
		console.log(value.filePaths)

		let image = [];
		let lista = [{
				url:value.pagePath,
				title:value.journaTitle
			}]

		image.push(
			<Lightbox
				images={value.filePaths}
				title="Archeion"
				startIndex={value.startIndex}
				allowReset={true}
				onClose={() => removeViewer()}
			/>
		)

		return ReactDOM.render(image, document.getElementById("page-viewer"));
	}

	function removeViewer()
	{
		ReactDOM.render('', document.getElementById("page-viewer"))
	}
}

export default ShowPageViewer;
