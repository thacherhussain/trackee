import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { LogBox } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import SplashScreen from 'react-native-splash-screen'

import StorybookUIRoot from '../storybook'
import { theme } from '../src/utils/theme'
import { Navigation } from '../src/navigation/Navigation'

const loadStorybook = false // Update to use ENV variables

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  )
}

export default loadStorybook ? StorybookUIRoot : App

// // Added to stop this warning for the native base checkbox list, this is an open issue with native base
// // Warning references this github issue -- https://github.com/adobe/react-spectrum/issues/2320
// // Open github issue -- https://github.com/GeekyAnts/NativeBase/issues/5098
LogBox.ignoreLogs([
  'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
  'Require cycle: node_modules/core-js/internals/microtask.js -> node_modules/core-js/internals/microtask.js',
])
