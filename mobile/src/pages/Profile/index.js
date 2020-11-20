import React from "react";

import { Container } from "./styles";

export default function Profile({ route }) {
  const gitHubUserName = route.params.github_username;

  return <Container source={{ uri: `https://github.com/${gitHubUserName}` }} />;
}
