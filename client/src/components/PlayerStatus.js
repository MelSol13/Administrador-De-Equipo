import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayerStatus = () => {
    const [teams, setTeams] = useState([]);
    const [teamStatus, setTeamStatus] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/teams")
            .then(res => {
                const updatedTeams = res.data.map(team => ({ ...team, status: 'Undecided' }));
                setTeams(updatedTeams);
                // Inicializar el estado de cada equipo en 'Undecided'
                const initialStatus = updatedTeams.map(() => 'Undecided');
                setTeamStatus(initialStatus);
            })
            .catch(err => console.error(err));
    }, []);

    const handlePlayerStatusChange = (teamId, newStatus, index) => {
        setTeamStatus(prevStatus => {
            const newStatusArray = [...prevStatus];
            newStatusArray[index] = newStatus;
            return newStatusArray;
        });
    };

    return (
        <div>
            <h1>Player Status</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{team.nombre}</td>
                            <td>
                                <button
                                    className={`btn ${teamStatus[index] === 'Playing' ? 'btn-success' : 'btn-secondary'}`}
                                    onClick={() => handlePlayerStatusChange(team.id, 'Playing', index)}
                                >
                                    Playing
                                </button>
                                <button
                                    className={`btn ${teamStatus[index] === 'Not Playing' ? 'btn-danger' : 'btn-secondary'}`}
                                    onClick={() => handlePlayerStatusChange(team.id, 'Not Playing', index)}
                                >
                                    Not Playing
                                </button>
                                <button
                                    className={`btn ${teamStatus[index] === 'Undecided' ? 'btn-warning' : 'btn-secondary'}`}
                                    onClick={() => handlePlayerStatusChange(team.id, 'Undecided', index)}
                                >
                                    Undecided
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerStatus;