import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'

import Home from './screens/Home'
import Details from './screens/Details'
import About from './screens/About'

const App = () => {

  let [ fontsLoaded ] = useFonts({
    'Montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  })

  console.log(fontsLoaded)

  const Stack = createStackNavigator()

  return (
    !fontsLoaded
    ? <AppLoading />
    : (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default App;