import React from "react";
import ReactDOM from "react-dom";
// import { DataGrid } from '@mui/x-data-grid';
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import foto from '../img/testeimage.png'
import foto2 from '../img/actualidade.jpg'

const Journals = () => {
  const element = "Hemeroteca";

  fetch("http://127.0.0.1:8000/api/journals", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(({ data }) => results(data));

  function imagem() {
	const image = [];
	const lista = [
		{
			url:foto,
			title:"image title 1"
		},
		{
			url:foto2,
			title:"image title 2"
		}
	]

	image.push(
		<Lightbox
		images={lista}
		title="fotos"	
		onClose={() => Journals()}
	  />
	)
	return ReactDOM.render(image, document.getElementById("appView"));
  }

  function results(data) {
    const content = [];

    content.push(
      <>
	  
        <button onClick={() => imagem()}>Imagem</button>

        <table key="1">
          <tbody>
            {data.map((key, value) => {
              return (
                <tr key={value}>
                  <td>{key.attributes.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );

    return ReactDOM.render(content, document.getElementById("appView"));
  }
};

export default Journals;
