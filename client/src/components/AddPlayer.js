import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPlayers = () => {
    const [nombre, setNombre] = useState("");
    const [position, setPosition] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChangeNombre = (e) => {
        const inputValue = e.target.value;
        setNombre(inputValue);
        if (inputValue.length < 2) {
            setError("Name must be at least 2 characters in length.");
        } else {
            setError(""); // Limpiar el mensaje de error si el nombre es válido.
        }
    };

    const guardarTeam = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/teams", {
            nombre,
            position
        })
            .then(res => {
                console.log(res)
                setNombre("");
                setPosition("");
                navigate("/players/list")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Add Player</h1>
            <form onSubmit={guardarTeam}>
                <div>
                    <label>Player Name:</label>
                    <input id="nombre" name="nombre" type="text" onChange={handleChangeNombre} value={nombre}></input>
                </div>
                <div>
                    <label>Preferred Position:</label>
                    <input id="position" name="position" type="text" onChange={e => setPosition(e.target.value)} value={position}></input>
                </div>
                {error ? <p className="text-danger">{error}</p> : null}
                <input type="submit" className="btn btn-success mt-3" value="ADD" />
            </form>
        </div>
    )
}

export default AddPlayers;