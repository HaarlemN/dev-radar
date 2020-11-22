import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Container } from './styles';

export default function Profile() {
  const route = useRoute();

  const gitHubUserName = route.params.github_username;

  return <Container source={{ uri: `https://github.com/${gitHubUserName}` }} />;
}
