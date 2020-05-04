import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Main from "../pages/Main";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#7d40e7" },
      }}
    >
      <Stack.Screen
        name="main"
        options={{ title: "DevRadar", headerTitleAlign: "center" }}
        component={Main}
      />
      <Stack.Screen
        name="profile"
        options={{ title: "Perfil no GitHub", headerTitleAlign: "center" }}
        component={Profile}
      />
    </Stack.Navigator>
  );
}
