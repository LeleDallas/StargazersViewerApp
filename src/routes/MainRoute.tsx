import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Repositories from '../screens/Repositories';
import { RootStackParamList } from '../types/routes';

export default () => {
    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Repositories"
                component={Repositories}
                options={({ route }) => ({
                    headerTitle: `${route.params.user.login}'s repositories`,
                    headerBackTitleVisible: false,
                })}
            />
        </Stack.Navigator>
    );
};
