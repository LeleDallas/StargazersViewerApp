import '@testing-library/react-native/extend-expect';;
import * as matchers from "jest-extended";
import 'react-native-gesture-handler/jestSetup';


expect.extend(matchers);

jest.mock('@gorhom/bottom-sheet', () => ({
    __esModule: true,
    ...require('@gorhom/bottom-sheet/mock')
}))

jest.mock('react-native-vector-icons/Octicons', () => 'Icon')


jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
    Reanimated.default.call = () => { };

    return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/stack', () => {
    return {
        createStackNavigator: () => ({
            Navigator: ({ children }) => <div>{children}</div>, // Mock Navigator component
            Screen: ({ children }) => <div>{children}</div>, // Mock Screen component
        }),
    };
});

afterEach(() => {
    jest.useRealTimers();
});

