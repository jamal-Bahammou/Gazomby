import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'

import HomeStack from './routes/HomeStack'
import AboutStack from './routes/AboutStack'

const App = () => {

  let [ fontsLoaded ] = useFonts({
    'Montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  })

  console.log(fontsLoaded)

  const Drawer = createDrawerNavigator()

  return (
    !fontsLoaded
    ? <AppLoading />
    : (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeStack} />
          <Drawer.Screen name='About' component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  );
}

export default App;