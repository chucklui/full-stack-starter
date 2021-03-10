import {useEffect, useState} from 'react';
import Api from '../Api';
import {Link} from 'react-router-dom';

function SkillsList() {
    const [skills, setSkills] = useState([]);

    useEffect(function() {
        Api.skills.index().then(response => setSkills(response.data));
    }, []);

    function onDelete(skill) {
        if (window.confirm(`Are you sure you want to delete ${skill.name}?`)) {
            //delete button from the API
            Api.skills.delete(skill.id).then(function() {
                //We are filtering the skills list, keeping every skill that does not
                //match the one we're deleting
                const newSkills = skills.filter(s => s.id !== skill.id);
                setSkills(newSkills);
            });
        }
    }

    return (
        <main className="container">
        <h1>Skills List</h1>
        <Link className="btn btn-primary" to="/skills/new">New</Link>
        <ul>
            {skills.map(s => (
                <li>
                    <p><Link to={`/skills/${s.id}/edit`}>{s.name}</Link></p>
                    <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                </li>
            ))}
        </ul>
        </main>
    );
}

export default SkillsList;