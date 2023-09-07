import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PlayersList = () => {
    const [teams, setTeams] = useState([]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [teamIdToDelete, setTeamIdToDelete] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/teams")
            .then(res => {
                setTeams(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const borrarTeam = (idTeam) => {
        setTeamIdToDelete(idTeam);
        setShowConfirmationModal(true);
    };

    const handleDeleteConfirmation = (teamIdToDelete) => {
        if (teamIdToDelete) {
            axios.delete(`http://localhost:8000/api/teams/${teamIdToDelete}`)
                .then((res) => {
                    if (res.status === 200) {
                        console.log("Equipo eliminado con éxito.");
                        setShowConfirmationModal(false);
                        setTeams(teams.filter(team => team._id !== teamIdToDelete));
                } else {
                    console.error("Error al eliminar el equipo.");
                }
                })
                .catch((err) => {
                    console.error("Error al eliminar el equipo:", err);
                });
        }
    };

    const handleCloseConfirmationModal = () => {
        setShowConfirmationModal(false);
    };

    return (
        <div>
            <h1>List</h1>
            <Link to="/players/addplayer" className="btn btn-success">Add Player</Link>
            <Link to="/players/status" className="btn btn-success">Player Status</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{team.nombre}</td>
                            <td>{team.position}</td>
                            <td>{team.accion}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => borrarTeam(team._id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showConfirmationModal && (
                <div className="confirmation-modal">
                    <p>Are you sure you want to remove this team?</p>
                    <button className="btn btn-danger" onClick={() => handleDeleteConfirmation(teamIdToDelete)}>Confirm</button>
                    <button className="btn btn-secondary" onClick={handleCloseConfirmationModal}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default PlayersList;