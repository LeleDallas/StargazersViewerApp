import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainRoute from './src/routes/MainRoute';
import { commonStyle } from './src/styles';

export default () =>
  <SafeAreaView style={commonStyle.background} >
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: commonStyle.text.color,
            background: commonStyle.background.backgroundColor,
            card: commonStyle.background.backgroundColor,
            text: commonStyle.text.color,
            border: commonStyle.text.color,
            notification: commonStyle.text.color
          }
        }}>
        <BottomSheetModalProvider>
          <MainRoute />
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  </SafeAreaView>;

