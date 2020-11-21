import React from "react";

import { Avatar, Bio, Container, InfoContainer, Header, Link, Techs, Title } from './styles';

export default function DevItem({ dev }) {
  return (
    <Container className="dev-item">
      <Header>
        <Avatar src={dev.avatar_url} alt={dev.name} />

        <InfoContainer className="user-info">
          <Title>{dev.name}</Title>
          <Techs>{dev.techs.join(", ")}</Techs>
        </InfoContainer>
      </Header>

      <Bio>{dev.bio}</Bio>
      <Link href={`https://github.com/${dev.github_usernLinkme}`}>
        Acessar perfil no GitHub
      </Link>
    </Container>
  );
}
