import ReactDOM from 'react-dom';
import OpenSeaDragon from "../../components/openseadragon-bin-2.4.2/openseadragon.js";

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
		.then((value) => results(value))


	function results(data)
	{
		console.log(data)
		console.log(data.pagePath)

		const viewer = new OpenSeaDragon.Viewer({
			type: "zoomifytileservice",
			id: "page-viewer",
			prefixUrl: "/openseadragon-bin-2.4.2/images/",
			showRotationControl: true,
			showNavigator:  true,
			gestureSettingsTouch: {
				pinchRotate: true
			},
			tileSources: {
				type: 'image',
				url:  data.pagePath,
			}
		});

		console.log(viewer)
	}

}


export default ShowPageViewer;