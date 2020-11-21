import React, { useEffect, useState } from "react";

import { Button, InputGroup, Form } from './styles';

import Input from '../Input';

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
    <Form onSubmit={handleSubmit}>
      <Input
        label="Usuário do GitHub"
        name="github_username"
        type="text"
        required
        value={github_username}
        onChange={(event) => setGitHubUsername(event.target.value)}
      />

      <Input
        label="Tecnologias"
        name="techs"
        type="text"
        required
        value={techs}
        onChange={(event) => setTechs(event.target.value)}
      />

      <InputGroup>
        <Input
          label="Latitude"
          name="latitude"
          type="number"
          required
          value={latitude}
          onChange={(event) => setLatitude(event.target.value)}
        />

        <Input
          label="Longitude"
          name="longitude"
          type="number"
          required
          value={longitude}
          onChange={(event) => setLongitude(event.target.value)}
        />
      </InputGroup>
      <Button type="submit">Salvar</Button>
    </Form>
  );
}
