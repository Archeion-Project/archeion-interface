import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";

export default function FormGenerator({ organization, entity, id = '', verb = 'GET'}) {

    const [widgetsInfo, setWidgetsInfo] = useState([]);

    useEffect(() => {
        const route = organization + '/' + entity + '/' + id;
        const options = {
            method: verb,
            headers: {
                "Content-Type" : "application/text"
            }
        };

        fetch(route, options)
            .then(res => res.json())
            .then(result => setWidgetsInfo(result))
    }, []);

    return (
        <>
            {widgetsInfo.map(widgetInfo => { getWidget(widgetInfo) } )}
        </>
    );
}

function getWidget({ name, label, value, slug }) {
    
    switch(name) {
        case 'TextWidget':
            return (
                <TextField id="outlined-basic" label={label} variant="outlined" value={value} name={slug} />
            );

        case 'TextAreaWidget':
            return (
                <TextField id="outlined-basic" label={label} multiline="true" variant="outlined" value={value} name={slug} />
            );
    }
}
