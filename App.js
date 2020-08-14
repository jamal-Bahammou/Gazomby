import React from 'react'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'

import Home from './screens/Home'
import About from './screens/About'

const App = () => {

  let [ fontsLoaded ] = useFonts({
    'Montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  })

  console.log(fontsLoaded)

  return (
    !fontsLoaded
    ? <AppLoading />
    : <Home />
  );
}

export default App;