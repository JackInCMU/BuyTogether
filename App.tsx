import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createCtx} from './components/AppContext';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [ctx, AppContextProvider] = createCtx("someText");

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppContextProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme}/>
          {/* <SignUpNavigation /> */}
          {/* <StatusBar /> */}
        </SafeAreaProvider>
      </AppContextProvider>
    );
  }
}
