import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainRoute from './src/routes/MainRoute';
import { colors, globalStyle, theme } from './src/styles';
import SplashScreen from 'react-native-splash-screen';

export default () => {

  useEffect(() => SplashScreen?.hide(), []);

  return <SafeAreaView style={[globalStyle.background, {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }]} >
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <BottomSheetModalProvider>
          <StatusBar backgroundColor={colors.background} barStyle="light-content" />
          <MainRoute />
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  </SafeAreaView>
};

