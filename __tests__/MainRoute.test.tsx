import { render } from '@testing-library/react-native';
import 'react-native-gesture-handler/jestSetup';
import MainRoute from '../src/routes/MainRoute';

describe('MainRoute', () => {
    it('renders without crashing', () => {
        render(<MainRoute />);
    });
});