import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { Main } from './src/main';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GerenalSans-700':require('./src/assets/fonts/GeneralSans-Bold.otf'),
    'GerenalSans-400':require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GerenalSans-600':require('./src/assets/fonts/GeneralSans-Semibold.otf'),
  });

  if (!isFontsLoaded){
    return null;
  }

  return (
    <>
      <StatusBar style="dark"/>
      <Main />
    </>
  );
}
