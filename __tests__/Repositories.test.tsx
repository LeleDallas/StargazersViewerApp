
import { NavigationContainer } from '@react-navigation/native';
import { render, waitFor } from '@testing-library/react-native';
import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Repositories from '../src/screens/Repositories';

const Stack = createStackNavigator();

describe('Repositories', () => {
    it('renders without crashing', () => {
        render(
            <NavigationContainer>
                <Stack.Screen
                    name="Repositories"
                    component={Repositories}
                    options={() => ({
                        headerBackTitleVisible: false
                    })}
                />
            </NavigationContainer>
        );
    });
});