import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => setIsEditing((editing) => !editing);
  const handleChange = (event) => setPlayerName(event.target.value);

  let playerNameField = <span className="player-name">{playerName}</span>;
  if (isEditing)
    playerNameField = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

  return (
    <li>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
