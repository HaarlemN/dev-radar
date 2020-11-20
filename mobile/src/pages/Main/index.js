import React, { useEffect, useState } from "react";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { Marker, Callout } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Map,
  Avatar,
  ContainerCallout,
  DevName,
  DevBio,
  DevTechs,
  SearchForm,
  Input,
  Button,
} from "./styles";

import api from "../../services/api";
import { connect, disconnect, subscribeToNewDevs } from "../../services/socket";

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState("");

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    }
    loadInitialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs((dev) => setDevs([...devs, dev]));
  }, [devs]);

  function setupWebsocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;

    connect(latitude, longitude, techs);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;
    const response = await api.get("/search", {
      params: {
        latitude,
        longitude,
        techs,
      },
    });
    setDevs(response.data);
    setupWebsocket();
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <Map
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
      >
        {devs.map((dev) => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0],
            }}
          >
            <Avatar
              source={{
                uri: dev.avatar_url,
              }}
            />
            <Callout
              onPress={() =>
                navigation.navigate("profile", {
                  github_username: dev.github_username,
                })
              }
            >
              <ContainerCallout>
                <DevName>{dev.name}</DevName>
                <DevBio>{dev.bio}</DevBio>
                <DevTechs>{dev.techs.join(", ")}</DevTechs>
              </ContainerCallout>
            </Callout>
          </Marker>
        ))}
      </Map>
      <SearchForm>
        <Input
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={(text) => setTechs(text)}
        />
        <Button onPress={loadDevs}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </Button>
      </SearchForm>
    </>
  );
}
