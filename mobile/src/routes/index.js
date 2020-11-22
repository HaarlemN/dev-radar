import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Profile from '../pages/Profile';

import Logo from '../components/Logo';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#7d40e7' },
      }}
    >
      <Stack.Screen
        name="main"
        options={{ headerTitle: () => <Logo />, headerTitleAlign: 'center' }}
        component={Main}
      />
      <Stack.Screen
        name="profile"
        options={{ title: 'Perfil no GitHub', headerTitleAlign: 'center' }}
        component={Profile}
      />
    </Stack.Navigator>
  );
}
