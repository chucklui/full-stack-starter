import {useEffect, useState} from 'react';
import Api from '../Api';
import {Link} from 'react-router-dom';

function SectionsList() {
    const [Sections, setSections] = useState([]);

    useEffect(function() {
        Api.sections.index().then(response => setSections(response.data));
    }, []);

    return (
        <main className="container">
        <h1>Sections List</h1>
        <Link className="btn btn-primary" to="/sections/new">New</Link>
        <ul>
            {Sections.map(s => (
                <li>{s.name}, {s.slug}, {s.position}</li>
            ))}
        </ul>
        </main>
    );
}

export default SectionsList;