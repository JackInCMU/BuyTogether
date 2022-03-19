import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextInterface, createCtx } from './components/AppContext';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import SignUpNavigation from './navigation/SignUpNavigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [ctx, AppContextProvider] = createCtx("someText");
  const AppContext = ctx;

  const[signUpState, setSignUpState] = useState("signup")

  const userSettings = {
    signUpState: setSignUpState
  };

  const sampleAppContext: AppContextInterface = {
    signUpState: "signup",
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
    url: "http://www.example.com",
  };

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
