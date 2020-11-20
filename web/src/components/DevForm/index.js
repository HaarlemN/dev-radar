import React, { useEffect, useState } from "react";

export default function DevForm({ onSubmit }) {
  const [github_username, setGitHubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGitHubUsername("");
    setTechs("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          onChange={(event) => setGitHubUsername(event.target.value)}
          value={github_username}
          name="github_username"
          id="github_username"
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          onChange={(event) => setTechs(event.target.value)}
          value={techs}
          name="techs"
          id="techs"
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            onChange={(event) => setLatitude(event.target.value)}
            type="number"
            value={latitude}
            name="latitude"
            id="latitude"
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            onChange={(event) => setLongitude(event.target.value)}
            type="number"
            value={longitude}
            name="longitude"
            id="longitude"
            required
          />
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}
