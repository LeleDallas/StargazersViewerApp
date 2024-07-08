import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainRoute from './src/routes/MainRoute';
import { globalStyle, theme } from './src/styles';

export default () =>
  <SafeAreaView style={globalStyle.background} >
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <BottomSheetModalProvider>
          <MainRoute />
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  </SafeAreaView>;

