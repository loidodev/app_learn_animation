import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import RootScreen from './screens';
import Animation from './screens/Animation';
import MasKedAnimation from './screens/MasKedAnimation';
import Search from './screens/Search';
import Transition from './screens/Transition';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Animated" component={RootScreen} />
        <Stack.Screen name="Transition" component={Transition} />
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="MasKedAnimation" component={MasKedAnimation} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
