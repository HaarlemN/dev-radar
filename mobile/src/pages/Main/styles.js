import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Map = styled(MapView)`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const ContainerCallout = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const DevTechs = styled.Text`
  margin-top: 5px;
`;

export const SearchForm = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  background: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
  elevation: 2;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #8e4dff;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;
