import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainRoute from './src/routes/MainRoute';
import { globalStyle, theme } from './src/styles';
import SplashScreen from 'react-native-splash-screen';

export default () => {
  
  useEffect(() => SplashScreen.hide(), []);

  return <SafeAreaView style={globalStyle.background} >
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <BottomSheetModalProvider>
          <MainRoute />
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  </SafeAreaView>
};

