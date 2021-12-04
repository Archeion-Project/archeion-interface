import { useEffect, useState } from 'react';

const JournalDetails = ({ idJournal }) => {
    const [journal, setJournal] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/journals/' + idJournal)
            .then(res => res.json())
            .then(({ data }) => setJournal({ id: data.id, ...data.attributes}))
            .catch(err => console.error(err));
    }, []);

    return (
        <table>
            <tbody>
                <tr>
                    <td>{ journal.id }</td>
                    <td>{ journal.title }</td>
                    <td>{ journal.localization }</td>
                    <td>{ journal.printing }</td>
                    <td>{ journal.idiom }</td>
                    <td>{ journal.creation_date }</td>
                    <td>{ journal.created_at }</td>
                    <td>{ journal.updated_at }</td>
                </tr>
            </tbody>
        </table>
    );
};
 
export default JournalDetails;
