import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import MealDetail from './pages/Detail/Detail';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {color: 'orange'},
          headerTintColor: 'orange',
        }}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="MealDetail" component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;