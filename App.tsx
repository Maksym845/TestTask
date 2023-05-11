/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { ReactQueryProvider } from './src/reactQuery/ReactQueryProvider';
import { AppNavigation } from './src/navigation/AppNavigation';
import { ScreenEnum } from './src/types/navigation';

function App(): JSX.Element {
  return (
    <ReactQueryProvider>
      <AppNavigation initialRoute={ScreenEnum.Home} />
    </ReactQueryProvider>
  );
}

export default App;
